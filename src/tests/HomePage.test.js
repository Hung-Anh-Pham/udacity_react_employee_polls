import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import HomePage from "../components/HomePage";
import { questions } from "../utils/_DATA";

const mockStore = configureMockStore();

describe("Test HomePage component", () => {
	let store;

	beforeEach(() => {
		const initialState = {
			authedUser: {
				id: "tylermcginnis",
				password: "abc321",
				name: "Tyler McGinnis",
			},
			questions: questions,
		};
		store = mockStore(initialState);
	});

	it("Should render correct QuestionCard component", () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<HomePage />
				</MemoryRouter>
			</Provider>
		);

		expect(screen).toMatchSnapshot();
	});
});
