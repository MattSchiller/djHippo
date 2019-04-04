import { IConfig, IRawPage } from "@Redux/Interfaces/IStore";

export const AboutPage: IRawPage = {
    pageId: "about",
    title: "About",
    configUrl: "configs/about.yaml",
};

export const ListenPage: IRawPage = {
    pageId: "listen",
    title: "Listen",
    configUrl: "configs/soundcloud.yaml",
};

export const ContactPage: IRawPage = {
    pageId: "contact",
    title: "Contact",
    configUrl: "configs/contact.yaml",
};

export const UpcomingEventsPage: IRawPage = {
    pageId: "events",
    title: "Events",
    configUrl: "configs/upcomingEvents.yaml",
};

export const Socials: IConfig = {
    configUrl: "configs/socials.yaml",
};
