export const RECEIVE_USER = "RECEIVE_USER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export function receiveUser(users) {
	return {
		type: RECEIVE_USER,
		users,
	};
}

export function addUserQuestion(question) {
	return {
		type: ADD_USER_QUESTION,
		userId: question.author,
		questionId: question.id,
	};
}

export function addUserAnswer({ userId, questionId, answer }) {
	return {
		type: ADD_USER_ANSWER,
		userId,
		questionId,
		answer,
	};
}
