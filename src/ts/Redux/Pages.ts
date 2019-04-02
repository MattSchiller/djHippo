import { IRawPage } from "@Redux/Interfaces/IStore";

export const AboutPage: IRawPage = {
    pageId: "about",
    title: "About",
    configUrl: "configs/about.yaml",
}

export const ListenPage: IRawPage = {
    pageId: "listen",
    title: "Listen",
    configUrl: "configs/soundcloud.yaml",
}

export const ContactPage: IRawPage = {
    pageId: "contact",
    title: "Contact",
    configUrl: "configs/contact.yaml",
}
