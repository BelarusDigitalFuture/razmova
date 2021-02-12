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

  return fetcher(`${config.apiUrl}/users/all`, requestOptions);
}

function getCurrent() {
  const requestOptions = {
    method: "GET"
  };

  return fetcher(`${config.apiUrl}/users`, requestOptions);
}

function getById(id) {
  const requestOptions = {
    method: "GET"
  };

  return fetcher(`${config.apiUrl}/users/${id}`, requestOptions);
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetcher(`${config.apiUrl}/users/register`, requestOptions);
}

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetcher(`${config.apiUrl}/users/${user.id}`, requestOptions);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE"
  };

  return fetcher(`${config.apiUrl}/users/${id}`, requestOptions);
}