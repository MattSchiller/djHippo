import yaml from "js-yaml";


// Ripped from: https://dev.to/iamandrewluca/typed-fetch-response-in-typescript-1eh1

export function typedFetch<T>(...args: any): Promise<T> {
    return fetch.apply(window, args)
        .then(response => {
            return response.text().then(text => yaml.safeLoad(text));

            // TODO: UNHAPPY PATH
        })
}
