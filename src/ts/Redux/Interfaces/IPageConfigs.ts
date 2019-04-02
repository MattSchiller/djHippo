export type IPageConfig = IAboutConfig | ISoundCloudConfig;

export interface IAboutConfig {
    imageSrc: string;
    textContent: string;
}

export interface ISoundCloudConfig {
    trackIds: string[];
}