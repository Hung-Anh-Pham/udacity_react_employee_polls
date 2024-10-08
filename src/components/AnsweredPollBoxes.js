import { Col } from "react-bootstrap";
import PollBox from "./PollBox";


const AnsweredPollBoxes = ({ questions, questionId, userId }) => {
	const question = Object.values(questions).find((q) => q.id === questionId);

	if (!question) return null;

	const totalVotes =
		question.optionOne.votes.length + question.optionTwo.votes.length;

	return (
		<>
			<Col>
				<PollBox
					handlePollClick={() => {}}
					questionContent={question.optionOne.text}
					answerType={"optionOne"}
					isAnswered={true}
					voteCount={question.optionOne.votes.length}
					percentage={(question.optionOne.votes.length / totalVotes) * 100}
					optionData={question.optionOne}
					userId={userId}
				/>
			</Col>
			<Col>
				<PollBox
					handlePollClick={() => {}}
					questionContent={question.optionTwo.text}
					answerType={"optionTwo"}
					isAnswered={true}
					voteCount={question.optionTwo.votes.length}
					percentage={(question.optionTwo.votes.length / totalVotes) * 100}
					optionData={question.optionTwo}
					userId={userId}
				/>
			</Col>
		</>
	);
};

export default AnsweredPollBoxes;