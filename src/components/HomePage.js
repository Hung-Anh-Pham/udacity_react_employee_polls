import { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

const HomePage = (props) => {
	const [newQuestion, doneQuestion] = ["New Question", "Done"];

	const [isNewQuestionView, setIsNewQuestionView] = useState(true);

	const handleToggleView = (value) => {
		setIsNewQuestionView(value);
	};

	const {
		questions,
		authedUser: { id },
	} = props;

	const [answered, unanswered] = [[], []];

	Object.values(questions)
		.sort((first, second) => second.timestamp - first.timestamp)
		.forEach((q) => {
			if ([...q.optionOne.votes, ...q.optionTwo.votes].includes(id)) {
				answered.push(q);
				return;
			}
			unanswered.push(q);
		});

	return (
		<Container>
			<ButtonGroup size="lg" className="my-2 mx-auto">
				<Button
					variant={isNewQuestionView ? "primary" : "secondary"}
					onClick={() => handleToggleView(true)}
				>
					{newQuestion}
				</Button>
				<Button
					variant={!isNewQuestionView ? "primary" : "secondary"}
					onClick={() => handleToggleView(false)}
				>
					{doneQuestion}
				</Button>
			</ButtonGroup>

			{isNewQuestionView ? (
				<QuestionList
					title={newQuestion}
					questionList={unanswered}
					isAnswered={false}
				/>
			) : (
				<QuestionList
					title={doneQuestion}
					questionList={answered}
					isAnswered={true}
				/>
			)}
		</Container>
	);
};

const mapStateToProps = ({ questions, authedUser }) => ({
	questions,
	authedUser,
});

export default connect(mapStateToProps)(HomePage);
