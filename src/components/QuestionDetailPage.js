import { useState } from "react";
import { Col, Container, Image, Row, } from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";
import ErrorPage from "./ErrorPage";
import PollBox from "./PollBox";
import AnsweredPollBoxes from "./AnsweredPollBoxes";


const QuestionDetailPage = (props) => {
	const {
		questions,
		authedUser: { id, avatarURL },
		dispatch,
	} = props;

	const { state } = useLocation();
	const { question_id: questionId } = useParams();
	const [userAnswered, setUserAnswered] = useState(false);

	let [optionOne, optionTwo, isAnswered] = [null, null, null];

	if (!state) {
		const existedQuestion = Object.values(questions).find(
			(q) => q?.id === questionId
		);
		if (!existedQuestion) {
			return <ErrorPage code={404} status={"Not Found"} />;
		}

		optionOne = existedQuestion.optionOne;
		optionTwo = existedQuestion.optionTwo;
		isAnswered = existedQuestion.isAnswered;
	} else {
		optionOne = state.optionOne;
		optionTwo = state.optionTwo;
		isAnswered = state.isAnswered;
	}

	const totalVotes = optionOne.votes.length + optionTwo.votes.length;

	const handlePollClick = (answer) => {
		dispatch(
			handleAnswerQuestion({
				userId: id,
				questionId,
				answer,
			})
		);
		setUserAnswered(true);
	};

	return (
		<Container className="text-center mt-4">
			<h2>Poll by {id}</h2>
			<div>
				<Image
					src={avatarURL}
					roundedCircle
					style={{ height: "10rem" }}
					className="my-4"
				/>
			</div>
			<h2 className="mb-4">Would you rather</h2>
			<Row>
				{userAnswered ? (
					<AnsweredPollBoxes
						questions={questions}
						questionId={questionId}
						userId={id}
					/>
				) : (
					<>
						<Col>
							<PollBox
								handlePollClick={handlePollClick}
								questionContent={optionOne.text}
								answerType={"optionOne"}
								isAnswered={isAnswered}
								voteCount={optionOne.votes.length}
								percentage={(optionOne.votes.length / totalVotes) * 100}
								optionData={optionOne}
								userId={id}
							/>
						</Col>
						<Col>
							<PollBox
								handlePollClick={handlePollClick}
								questionContent={optionTwo.text}
								answerType={"optionTwo"}
								isAnswered={isAnswered}
								voteCount={optionTwo.votes.length}
								percentage={(optionTwo.votes.length / totalVotes) * 100}
								optionData={optionTwo}
								userId={id}
							/>
						</Col>
					</>
				)}
			</Row>
		</Container>
	);
};

const mapStateToProps = ({ questions, authedUser }) => ({
	questions,
	authedUser,
});

export default connect(mapStateToProps)(QuestionDetailPage);
