import { typedFetch } from "@Helpers/Fetch";
import { IContentConfig } from "@Redux/Interfaces/IContentConfig";
import { IPage, IRawPage, IStore } from "@Redux/Interfaces/IStore";
import { AboutPage, ContactPage, ListenPage, UpcomingEventsPage } from "@Redux/ContentConfigs";

export const initialState = getInitialState();

function getInitialState(): IStore {
    const pages: IPage[] = [
        initializePage(ListenPage),
        initializePage(AboutPage),
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
    const fetchedConfig = configUrl ? typedFetch<IContentConfig>(`${configUrl}?${performance.now()}`) : undefined;

    return {
        ...rawPage,
        fetchedConfig,
    };
}