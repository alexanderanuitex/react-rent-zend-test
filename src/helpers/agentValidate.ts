import { Agent } from "../models/agent";
import { AgentErrors } from "../models/agentErrors";

const errors: AgentErrors = new AgentErrors();
export default function(value:Agent )  {
        if (!value.address) {
          errors.address = 'Required';
        } 
        if (!value.name) {
            errors.name = 'Required';
        }  
        if (!value.email) { 
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
            errors.email = 'Invalid email address';
        }
      
        return errors;
      };
     