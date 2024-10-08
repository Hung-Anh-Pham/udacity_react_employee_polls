import { useState } from "react";
import { Button, Alert, Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

const AddQuestionPage = (props) => {
	const navigate = useNavigate();

	const [optionOne, setOptionOne] = useState("");
	const [optionTwo, setOptionTwo] = useState("");
	const [errMsg, setErrMsg] = useState(null);

	const {
		authedUser: { id },
		dispatch,
	} = props;

	const handleOnChangeFormInput = (event, type) => {
		event.persist();
		if (type === 1) {
			setOptionOne(event.target.value);
			return;
		}
		setOptionTwo(event.target.value);
	};

	const handleFormSubmit = (event) => {
		if (event) {
			event.preventDefault();
			if (!optionOne || !optionTwo || !id) {
				setErrMsg("Input must not be empty");
				return;
			}

			setErrMsg(null);

			const question = {
				optionOneText: optionOne,
				optionTwoText: optionTwo,
				author: id,
			};
			dispatch(handleAddQuestion(question));
			navigate("/");
		}
	};

	return (
		<Container>
			<div className="mt-4 text-center">
				<h1>Would You Rather</h1>
				<p>Create Your Own Poll</p>
				{errMsg ? <Alert variant="danger">{errMsg}</Alert> : ""}
			</div>

			<Form onSubmit={handleFormSubmit}>
				<Form.Group className="mb-3" controlId="formOptionOne">
					<p className="text-center">First Option</p>
					<Form.Control
						type="text"
						placeholder="Option One"
						value={optionOne}
						onChange={(e) => handleOnChangeFormInput(e, 1)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formOptionTwo">
					<p className="text-center me-auto">Second Option</p>
					<Form.Control
						type="text"
						placeholder="Option Two"
						value={optionTwo}
						onChange={(e) => handleOnChangeFormInput(e, 2)}
					/>
				</Form.Group>
				<div className="d-grid">
					<Button variant="primary" type="submit" size="lg">
						Submit
					</Button>
				</div>
			</Form>
		</Container>
	);
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(AddQuestionPage);
