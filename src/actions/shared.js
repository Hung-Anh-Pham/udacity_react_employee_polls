import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveUser } from "./users";
import { receiveQuestion } from "./questions";

export function handleInitialData() {
	return async (dispatch) => {
		const { users, questions } = await getInitialData();
		dispatch(receiveUser(users));
		dispatch(receiveQuestion(questions));
	};
}

export function authenticateUser(userObj) {
	return (dispatch) => {
		dispatch(setAuthedUser(userObj));
	};
}
