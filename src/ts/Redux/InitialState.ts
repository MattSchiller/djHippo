import { IPage, IStore, IRawPage } from "@Redux/Interfaces/IStore";
import { IPageConfig } from "@Redux/Interfaces/IPageConfigs";
import { AboutPage } from "@Pages/Pages";
import { typedFetch } from "@Helpers/Fetch";

export const initialState = getInitialState();

function getInitialState(): IStore {
    const pages: IPage[] = [
        initializePage(AboutPage)
    ];

    const activePageId: string = pages[0].pageId;

    return {
        pages,
        activePageId,
    };
}

function initializePage(rawPage: IRawPage): IPage {
    const configUrl: string | undefined = rawPage.configUrl;
    const fetchedConfig = configUrl ? typedFetch<IPageConfig>(configUrl) : undefined;

    return {
        ...rawPage,
        fetchedConfig,
    };
}