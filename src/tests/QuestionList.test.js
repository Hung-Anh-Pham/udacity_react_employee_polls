import { MemoryRouter } from "react-router-dom";
import QuestionList from "../components/QuestionList";
import { questions } from "../utils/_DATA";
import { renderWithProviders } from "./setup-test";
import configureMockStore from "redux-mock-store";
import { screen } from "@testing-library/react";


const mockStore = configureMockStore();

describe("Test QuestionList component", () => {
	let store;

	beforeAll(() => {
        store = mockStore({
            questions: {
            },
        });
	});


	it("Should render correct QuestionList component", async () => {
		renderWithProviders(
			<MemoryRouter>
				<QuestionList
					questionList={Object.values(questions)}
				/>
			</MemoryRouter>,
			{ store }
		)

		expect(screen).toMatchSnapshot();
	});
});
