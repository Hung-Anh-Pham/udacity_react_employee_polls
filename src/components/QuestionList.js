import { Card } from "react-bootstrap";
import QuestionCard from "./QuestionCard";

const QuestionList = ({ title, questionList, isAnswered }) => {
	return (
		<>
			<Card className="my-4 p-1">
				<Card.Header as="h3" className="text-center">
					{title}
				</Card.Header>
				<Card.Body>
					<div className="d-flex flex-wrap">
						{questionList.map((q) => (
							<QuestionCard key={q.id} question={q} isAnswered={isAnswered} />
						))}
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default QuestionList;
