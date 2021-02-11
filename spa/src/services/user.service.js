import { config } from "../globals";
import { fetcher, setAccessToken, removeAuthTokens } from "@helpers";

export const userService = {
  login,
  logout,
  register,
  getAll,
  getCurrent,
  getById,
  update,
  delete: _delete,
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  return fetcher(`${config.apiUrl}/Auth/login`, requestOptions)
    .then(handleResponse)
    .then((payload) => {
      setAccessToken(payload.accessToken);
      return payload;
    });
}

function logout() {
  removeAuthTokens();
}

function getAll() {
  const requestOptions = {
    method: "GET"
  };

  return fetcher(`${config.apiUrl}/users/all`, requestOptions).then(handleResponse);
}

function getCurrent() {
  const requestOptions = {
    method: "GET"
  };

  return fetcher(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: "GET"
  };

  return fetcher(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetcher(`${config.apiUrl}/users/register`, requestOptions).then(
    handleResponse
  );
}

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetcher(`${config.apiUrl}/users/${user.id}`, requestOptions).then(
    handleResponse
  );
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE"
  };

  return fetcher(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
