import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
} from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import AddQuestionPage from "./AddQuestionPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import LeaderboardPage from "./LeaderboardPage";
import LoginPage from "./LoginPage";
import NavigationBar from "./NavigationBar";
import QuestionDetailPage from "./QuestionDetailPage";

const Root = () => {
	return (
		<Container>
			<NavigationBar />
			<Outlet />
		</Container>
	);
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={"/"} element={<Root />} errorElement={<ErrorPage />}>
			<Route index element={<HomePage />} errorElement={<ErrorPage />} />
			<Route
				path={"/leaderboard"}
				element={<LeaderboardPage />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path={"/add"}
				element={<AddQuestionPage />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path={"/questions/:question_id"}
				element={<QuestionDetailPage />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path={"/error"}
				element={<ErrorPage />}
				errorElement={<ErrorPage />}
			/>
		</Route>
	)
);

const App = ({ dispatch, authedUser }) => {
	useEffect(() => {
		dispatch(handleInitialData());
	}, [dispatch]);

	return authedUser ? <RouterProvider router={router} /> : <LoginPage />;
};

const mapStateToProps = ({ authedUser, questions }) => ({
	questions,
	authedUser,
});

export default connect(mapStateToProps)(App);
