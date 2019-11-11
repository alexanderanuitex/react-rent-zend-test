import { BaseState } from "../baseState";

export interface AddAgentState extends BaseState {
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    address: string,
    zipCode: string,
    file: string
  }