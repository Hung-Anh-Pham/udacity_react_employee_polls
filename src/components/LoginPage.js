import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { authenticateUser } from "../actions/shared";
import { login } from "../utils/api";

const LoginPage = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleOnChangeFormInput = (event, type) => {
		event.persist();
		if (type === "username") {
			setUsername(event.target.value);
			return;
		}
		setPassword(event.target.value);
	};

	const handleFormSubmit = (event) => {
		if (event) {
			event.preventDefault();
		}

		login(username, password)
			.then((user) => {
				props.dispatch(authenticateUser(user));
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<Container>
			<h1 className="mt-4 text-center">Login</h1>
			<Card style={{ width: "40rem" }} className="p-4 mx-auto mt-4">
				<Form onSubmit={handleFormSubmit}>
					<Form.Group className="mb-3" controlId="formBasicUsername">
						<Form.Control
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => handleOnChangeFormInput(e, "username")}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => handleOnChangeFormInput(e, "password")}
						/>
					</Form.Group>
					<div className="d-grid gap-2">
						<Button variant="primary" type="submit" size="lg">
							Login
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	);
};

const mapStateToProps = ({ authedUser }) => ({
	authedUser,
});

export default connect(mapStateToProps)(LoginPage);
