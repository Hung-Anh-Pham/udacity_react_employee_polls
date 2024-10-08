import {
	ADD_USER_QUESTION,
	RECEIVE_USER,
	ADD_USER_ANSWER,
} from "../actions/users";

export default function users(state = {}, action) {
	const { userId, questionId, answer } = action;
	const user = state[userId];

	switch (action.type) {
		case RECEIVE_USER:
			return {
				...state,
				...action.users,
			};
		case ADD_USER_QUESTION:
			return {
				...state,
				[userId]: {
					...user,
					questions: [...user.questions, questionId],
				},
			};
		case ADD_USER_ANSWER:
			const answers = user.answers;
			return {
				...state,
				[userId]: { ...user, answers: { ...answers, [questionId]: answer } },
			};
		default:
			return state;
	}
}
