const constants = {
    ACCESS_TOKEN_KEY: 'accesToken'
}

const getItem = (key) => localStorage.getItem(key);

const handleItem = (key, value) => {
	if (value) {
		localStorage.setItem(key, value);
	} else {
		localStorage.removeItem(key);
	}
};

export const setAccessToken = (token) => handleItem(constants.ACCESS_TOKEN_KEY, token);
export const getAccessToken = () => getItem(constants.ACCESS_TOKEN_KEY);
export const removeAuthTokens = () => handleItem(constants.ACCESS_TOKEN_KEY);