import moment from "moment";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const QuestionCard = ({ question, isAnswered }) => {
	const { id: questionId, author, timestamp } = question;

	const createdAt = moment(timestamp).format("DD MMM YYYY, h:mm:ss a");

	const navigate = useNavigate();

	const handleShowButtonClick = (questionId) => {
		navigate("/questions/" + questionId, {
			state: { ...question, isAnswered: isAnswered },
		});
	};

	return (
		<Card style={{ width: "18rem" }} className="m-2">
			<Card.Body>
				<Card.Title>{author}</Card.Title>
				<Card.Text>{createdAt}</Card.Text>
				<div className="d-grid">
					<Button
						variant="outline-success"
						onClick={() => handleShowButtonClick(questionId)}
					>
						Show
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default QuestionCard;
