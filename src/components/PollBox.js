import { Card, Stack, Badge, Button } from "react-bootstrap";

const PollBox = ({
	handlePollClick,
	questionContent,
	answerType,
	isAnswered,
	voteCount,
	percentage,
	optionData,
	userId,
}) => {
	const isSelected = optionData.votes.includes(userId);
	const className = isSelected ? "bg-success-subtle border border-success" : "";

	return (
		<Card>
			<Card.Body className={className}>
				<Card.Text>{questionContent}</Card.Text>
				{isAnswered ? (
					<Stack direction="horizontal" gap={2} className="mb-3">
						<Badge pill bg="primary">
							Votes: {voteCount}
						</Badge>
						<Badge pill bg="info">
							Percentage: {Math.round(percentage)}%
						</Badge>
					</Stack>
				) : (
					""
				)}
				<div className="d-grid">
					<Button
						variant="success"
						disabled={isAnswered}
						onClick={() => handlePollClick(answerType)}
					>
						Click
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default PollBox;