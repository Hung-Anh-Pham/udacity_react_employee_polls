import { saveQuestion, saveQuestionAndAnswer } from "../utils/api";
import { addUserAnswer, addUserQuestion } from "./users";

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestion(questions) {
	return {
		type: RECEIVE_QUESTION,
		questions,
	};
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}

export function answerQuestion({ userId, questionId, answer }) {
	return {
		type: ANSWER_QUESTION,
		userId,
		questionId,
		answer,
	};
}

export function handleAddQuestion(question) {
	return async (dispatch) => {
		const res = await saveQuestion(question);
		dispatch(addQuestion(res));
		dispatch(addUserQuestion(res));
	};
}

export function handleAnswerQuestion({ userId, questionId, answer }) {
	return async (dispatch) => {
		saveQuestionAndAnswer({ authedUser: userId, qid: questionId, answer });
		dispatch(answerQuestion({ userId, questionId, answer }));
		dispatch(addUserAnswer({ userId, questionId, answer }));
	};
}
