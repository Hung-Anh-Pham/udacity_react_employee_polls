import { fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import AddQuestionPage from "../components/AddQuestionPage";
import { renderWithProviders } from "./setup-test";


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
			users: {
				zoshikanlu: {
					id: "zoshikanlu",
					name: "Zenobia Oshikanlu",
					avatarURL: "url_to_avatar",
				},
			},
			questions: {},
		};
		store = mockStore(initialState);
	});

	it("Should render correct AddQuestionPage component", () => {
		renderWithProviders(
			<MemoryRouter>
				<AddQuestionPage />
			</MemoryRouter>,
			{ store }
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
