import {
	ADD_QUESTION,
	ANSWER_QUESTION,
	RECEIVE_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTION:
			return {
				...state,
				...action.questions,
			};
		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question,
			};
		case ANSWER_QUESTION:
			const question = state[action.questionId];
			const votes = question[action.answer].votes;
			const answer = question[action.answer];
			return {
				...state,
				[action.questionId]: {
					...question,
					[action.answer]: { ...answer, votes: [...votes, action.userId] },
				},
			};
		default:
			return state;
	}
}
