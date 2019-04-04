import yaml from "js-yaml";

export function typedFetch<T>(...args: any): Promise<T> {
    return fetch.apply(window, args)
        .then(response => {
            return response.text().then(text => {
                return yaml.safeLoad(text);
            });

            // TODO: UNHAPPY PATH
        });
}
