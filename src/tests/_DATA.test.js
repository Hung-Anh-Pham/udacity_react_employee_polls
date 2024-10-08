import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";


describe("Test API call on _DATA.js", () => {
	it("Should success saving question", async () => {
		const question = {
			optionOneText: "Build our new application with Javascript",
			optionTwoText: "Build our new application with Typescript",
			author: "zoshikanlu",
		};

		const result = await _saveQuestion(question);

		expect(result.author).toBe(question.author);
		expect(result.optionOne.text).toBe(question.optionOneText);
		expect(result.optionTwo.text).toBe(question.optionTwoText);
	});

	it("Should failed saving question", async () => {
		await expect(_saveQuestion({})).rejects.toBe(
			"Please provide optionOneText, optionTwoText, and author"
		);
	});

	it("Should success saving question answer", async () => {
		const input = {
			authedUser: "mtsamis",
			qid: "6ni6ok3ym7mf1p33lnez",
			answer: "optionOne",
		};

		const result = await _saveQuestionAnswer(input);

		expect(result).toBeTruthy();
	});

	it("Should failed saving question answer", async () => {
		await expect(_saveQuestionAnswer({})).rejects.toBe(
			"Please provide authedUser, qid, and answer"
		);
	});
});
