import {
	_getUsers,
	_getQuestions,
	_saveQuestion,
	_saveQuestionAnswer,
	users,
} from "./_DATA.js";

export function getInitialData() {
	return Promise.all([_getUsers(), _getQuestions()]).then(
		([users, questions]) => ({ users, questions })
	);
}

export function saveQuestion(question) {
	return _saveQuestion(question);
}

export function saveQuestionAndAnswer({ authedUser, qid, answer }) {
	return _saveQuestionAnswer({ authedUser, qid, answer });
}

export function login(username, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = users[username];
			if (!user || user?.password !== password) {
				reject("Username or password incorrect!");
			}

			resolve(user);
		}, 500);
	});
}
