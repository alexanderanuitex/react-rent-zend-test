import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Agent } from '../models/agent';
const { ApolloServer, gql } = require('apollo-server');
import { useFormik } from 'formik';
import validate from '../helpers/agentValidate';

  const state: Agent ={
      id: "",
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      file: ""
  }; 
  
  const formik = useFormik({
    initialValues: state,
    validate,
    onSubmit: values => {
        addAgent();
      alert(JSON.stringify(values, null, 2));
    },
  });

 function addAgent() {
    const resolvers = {
      Query: {
        agent: () => state,
      },
    };
    const typeDefs= gql`
    mutation createPost($name: String!, $email: String!, $phoneNumber: String!, $address: String!, $zipCode: String!, $file: String!){
      createAgent(name: $name, email: $email, $phoneNumber: phoneNumber, address: $address, zipCode: $zipCode, file: $file) {
        id
      }
    }
  `;
  let url  ="https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex";
  let server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(() => {
      console.log(`🚀  Server ready at ${url}`);
    });
  
}

export class CreateAgent extends React.Component { 

  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);

  
  render() {      
    return (
      <div>   
        <form  onSubmit={formik.handleSubmit}>         
            <TextField autoFocus type="text" id="name" value={state.name} name="name" label="name" 
            placeholder="name" fullWidth onChange={this.handle} />
            <br />
            <TextField autoFocus type="email" id="email" value={state.email} name="email" label="email" 
            placeholder="email" fullWidth onChange={this.handle} />
            <br />
            <TextField autoFocus type="text" id="phoneNumber" value={state.phoneNumber} name="phoneNumber" label="phoneNumber" 
            placeholder="phoneNumber" fullWidth onChange={this.handle} />
            <br />
            <TextField autoFocus type="text" id="address" value={state.address} name="address" label="address" 
            placeholder="address" fullWidth onChange={this.handle} />
            <br />
            <TextField autoFocus type="text" id="zipCode" value={state.zipCode} name="zipCode" label="zipCode" 
            placeholder="zipCode" fullWidth onChange={this.handle} />
            <br />
            <Button
            variant="contained"
            component="label"
            >
            Upload File
            <input
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                value={state.file} 
            />
            </Button>            
            <br />
            <button type="submit">Submit</button>
          </form>
      </div>
    );
  }
}

