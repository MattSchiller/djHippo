import { IPageConfig, IAboutConfig } from "@Redux/Interfaces/IPageConfigs";

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

export interface IRawPage extends IBasePage {
    configUrl?: string;
}

export interface IPage extends IBasePage {
    fetchedConfig?: Promise<IPageConfig>
}
