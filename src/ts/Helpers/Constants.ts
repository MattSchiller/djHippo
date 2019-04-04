export const renderTargetId: string = "renderTarget";

export const soundCloudUrlPrefix: string = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/";
export const soundCloudUrlSuffix: string = "&color=%237d0399&auto_play=false&hide_related=false&show_comments=true" +
    "&show_user=true&show_reposts=false&show_teaser=true";

export const headerLogoUrl: string = "assets/images/DJHippo_Logo_white.png";

export const monthNames: string[] = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];

interface IDateSuffices {
    [key: string]: string;
}

export const dateSuffices: IDateSuffices = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
    5: "th",
    6: "th",
    7: "th",
    8: "th",
    9: "th",
    0: "th",
};
