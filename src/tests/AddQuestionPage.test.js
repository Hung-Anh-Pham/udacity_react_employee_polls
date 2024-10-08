import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import AddQuestionPage from "../components/AddQuestionPage";

const mockStore = configureMockStore();

describe("Test AddQuestionPage component", () => {
	let store;

	beforeEach(() => {
		const initialState = {
			authedUser: {
				id: "zoshikanlu",
				password: "pass246",
				name: "Zenobia Oshikanlu",
			},
		};
		store = mockStore(initialState);
	});

	it("Should render correct AddQuestionPage component", () => {

		render(
			<Provider store={store}>
				<MemoryRouter>
					<AddQuestionPage />
				</MemoryRouter>
			</Provider>
		);

		const optOneInput = screen.getByPlaceholderText("Option One");
		fireEvent.change(optOneInput, { target: { value: "Changed One" } });

		const optTwoInput = screen.getByPlaceholderText("Option Two");
		fireEvent.change(optTwoInput, { target: { value: "" } });

		const submitBtn = screen.getByText("Submit");
		expect(submitBtn).toBeInTheDocument();

		fireEvent.click(submitBtn);

		const errMsg = screen.getByText("Input must not be empty");
		expect(errMsg).toBeInTheDocument();
	});
});
