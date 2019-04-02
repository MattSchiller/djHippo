import { typedFetch } from "@Helpers/Fetch";
import { IPageConfig } from "@Redux/Interfaces/IPageConfigs";
import { IPage, IRawPage, IStore } from "@Redux/Interfaces/IStore";
import { AboutPage, ContactPage, ListenPage, UpcomingEventsPage } from "@Redux/Pages";

export const initialState = getInitialState();

function getInitialState(): IStore {
    const pages: IPage[] = [
        initializePage(AboutPage),
        initializePage(ListenPage),
        initializePage(ContactPage),
        initializePage(UpcomingEventsPage),
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