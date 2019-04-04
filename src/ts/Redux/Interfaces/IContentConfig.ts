export type IContentConfig = IAboutConfig | ISoundCloudConfig | IContactConfig | IUpcomingEventsConfig;

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

export interface IUpcomingEventsConfig {
    events: IUpcomingEvent[];
}

export interface IUpcomingEvent {
    date: string;
    name: string;
    location: string;
    event?: string;
    tickets?: string;
}

export interface ISocialsConfig {
    socials: ISocial[];
}

export interface ISocial {
    icon: string;
    link: string;
}
