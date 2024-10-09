import Container from "react-bootstrap/Container";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = ({ code, status }) => {
	const error = useRouteError();

	let errorText = error?.statusText || error?.message;
	if (code && status) {
		errorText = `${code} ${status}`;
	}

	return (
		<Container>
			<div id="error-page" className="text-center mt-2">
				<h1>Oops!</h1>
				<p>Unexpected error occurred</p>
				<p>
					<i>{errorText}</i>
				</p>
				<Link to={`/`}>Go to homepage</Link>
			</div>
		</Container>
	);
};

export default ErrorPage;