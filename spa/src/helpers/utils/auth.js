import moment from "moment";
import jwtDecode from "jwt-decode";

import { removeAuthTokens, getAccessToken } from "@helpers";

export function isTokenExpired(token) {
	const data = jwtDecode(token);
	const now = moment().unix();
	
	if (now >= data.exp * 1000) {
		return true;
	}

	return !token;
}

export function test() { console.log('works!') };

export const isLoggedIn = () => {
	const accessToken = getAccessToken();

	if (!accessToken) {
		return false;
	}

	if (isTokenExpired(accessToken)) {
		removeAuthTokens();
		return false;
	}

	return true;
};

export const getAuthorizedUserId = () => {
	const accessToken = getAccessToken();

	if (!accessToken || isTokenExpired(accessToken)) {
		return null;
	}

	const data = jwtDecode(accessToken);

	return data.user_id;
};