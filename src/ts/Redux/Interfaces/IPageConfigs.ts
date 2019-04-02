export type IPageConfig = IAboutConfig | ISoundCloudConfig | IContactConfig;

export interface IAboutConfig {
    imageSrc: string;
    textContent: string;
}

export interface ISoundCloudConfig {
    trackIds: string[];
}

export interface IContactConfig {
    contactEmails: IContactEmail[];
}

export interface IContactEmail {
    label: string;
    email: string;
}