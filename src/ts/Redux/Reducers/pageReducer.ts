import { initialState } from "@Redux/InitialState";
import { IAction } from "@Redux/Interfaces/IAction";
import { IPage, IStore, } from "@Redux/Interfaces/IStore";
import { ActionTypes } from "@Redux/ActionTypes";

export function pageReducer(state: IStore = initialState, action: IAction) {
    const payload = action.payload;
    if (!payload)
        return state;

    const pageId = payload.pageId;

    if (action.type === ActionTypes.SET_ACTIVE_PAGE) {
        if (pageId !== state.activePageId)
            return {
                ...state,
                activePageId: pageId
            };
    }

    return state;
}
