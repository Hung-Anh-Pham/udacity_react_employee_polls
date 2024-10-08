export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(userObj) {
	return {
		type: SET_AUTHED_USER,
		userObj,
	};
}
