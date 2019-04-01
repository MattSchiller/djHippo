import { ActionTypes } from "@Redux/ActionTypes";
import { ISetActivePagePayload } from "@Redux/Interfaces/IAction";
import { store } from "@Redux/Store";

export const Actions = {
    setActivePage: (payload: ISetActivePagePayload) =>
        store.dispatch({
            type: ActionTypes.SET_ACTIVE_PAGE,
            payload
        }),
};
