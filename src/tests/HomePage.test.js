import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import HomePage from "../components/HomePage";
import { questions } from "../utils/_DATA";
import { renderWithProviders } from "./setup-test";


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

		const { page } = renderWithProviders(
			<MemoryRouter>
				<HomePage />
			</MemoryRouter>,
			{ store }
		)

		expect(page).toMatchSnapshot();
	});
});
