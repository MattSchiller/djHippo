import { IPage, IStore } from "@Redux/Interfaces/IStore";
import { pageReducer } from "@Redux/Reducers/pageReducer";
import { createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store: Store = createStore(
    pageReducer,
    devToolsEnhancer({})
);

export function getPages(): IPage[] {
    return (store.getState() as IStore).pages;
}

export function getActivePageId(): string {
    return (store.getState() as IStore).activePageId;
}

export function getActivePage(): IPage {
    return getPageFromPageId(getActivePageId());
}

export function isValidPageId(pageId: string): boolean {
    return getPages().map(page => page.pageId).includes(pageId);
}

export function getPageFromPageId(pageId: string): IPage {
    return getPages().filter((page: IPage) => page.pageId === pageId)[0];
}
