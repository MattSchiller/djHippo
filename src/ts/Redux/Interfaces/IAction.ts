import { ActionTypes } from "@Redux/ActionTypes";

export interface IAction {
    type: ActionTypes;
    payload: ISetActivePagePayload;
}

export interface ISetActivePagePayload {
    pageId: string;
}
