import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-client';
import { CreateAgent } from './components/createAgent';
import {  ApolloProvider } from 'react-apollo';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

export const link = createHttpLink({
  uri: "https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex"
});
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <div className="App-header">      
        <h2>Test RentZend</h2>
      </div>
      <CreateAgent />
    </div>
  </ApolloProvider>
  );
}

export default App;
