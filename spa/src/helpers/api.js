import { getAccessToken } from "@helpers";

function updateOptions(options) {
    const extendedOptions = { ...options };
    const headers = { ...extendedOptions.headers }

    if (!headers) {
        headers = {};
    }

    attachAuthHeader(headers);
    attachDefaultHeaders(headers);
    
    extendedOptions.headers = headers;

    return extendedOptions;
}

function attachAuthHeader(headers) {
    const accessToken = getAccessToken();

    if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
    }
};

function attachDefaultHeaders(headers) {
    headers["Access-control-allow-origin"] = "*";
};
  
export function fetcher(url, options) {
    return fetch(url, updateOptions(options));
}