import { RootState } from "../../redux/rootReducer";
import { AddAgentState } from "./type";

export const initialState: AddAgentState = {
  error: "",
  address: "",
  email: "",
  file: "",
  id:"",
  name: "",
  phoneNumber:"",
  zipCode: ""
};

export function agentReducer(state: AddAgentState = initialState, action: any) {
  switch (action.type) {
    case `@@agent/DATA_INIT`: {     
      return initialState;
    }   
    default:
      return state;
  }
}

export const home = (state: RootState) => state.addAgent;