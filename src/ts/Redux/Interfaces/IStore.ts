import { IContentConfig } from "@Redux/Interfaces/IContentConfig";

export interface IStore extends IActivePageProps {
    pages: IPage[];
}

export interface IActivePageProps {
    activePageId: string;
}

interface IBasePage {
    pageId: string;
    title: string;
}

export interface IConfig {
    configUrl?: string;
}

export interface IRawPage extends IBasePage, IConfig { }

export interface IPage extends IBasePage {
    fetchedConfig?: Promise<IContentConfig>;
}
