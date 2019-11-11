import { Reducer, combineReducers } from "redux";
import { AddAgentState } from "./agent/type";
import { agentReducer } from "./agent/reducer";
import { errorReducer } from "./common/reducer";
//import { agentReducer } from "./agent/agent";
export interface RootState {
  error: string;
  addAgent: AddAgentState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  error: errorReducer,
  addAgent: agentReducer
});

export default rootReducer;