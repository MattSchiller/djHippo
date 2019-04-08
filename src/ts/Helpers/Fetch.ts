import yaml from "js-yaml";

export function typedFetch<T>(...args: any): Promise<T> {
    return fetch.apply(window, args)
        .then(response => {
            if (response.ok)
                return response.text().then(text => {
                    return yaml.safeLoad(text);
                });

            throw new Error(`Fetching of file failed! response: ${response}`);
        });
}
