import { getAccessToken } from "@helpers";

function updateOptions(options) {
    const extendedOptions = { ...options };
    const headers = { ...extendedOptions.headers }

    if (!headers) {
        headers = {};
    }

    updateHeaders(headers);
    
    extendedOptions.headers = headers;

    return extendedOptions;
}

export function updateHeaders(headers) {
    attachAuthHeader(headers);
    attachDefaultHeaders(headers);
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

function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
  
      return data;
    });
}
  
export function fetcher(url, options) {
    return fetch(url, updateOptions(options)).then(handleResponse);
}