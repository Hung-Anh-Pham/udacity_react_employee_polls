import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import QuestionCard from "../components/QuestionCard";
import reducers from "../reducers";
import { screen, render } from "@testing-library/react";

describe("Test QuestionCard component", () => {
	let testStore;

	beforeAll(() => {
		testStore = createStore(reducers);
	});

	it("Should render correct QuestionCard component", async () => {
		const question = {
			id: "vthrdm985a262al8qx3do",
			author: "tylermcginnis",
			timestamp: 1467166872634,
		};

		render(
			<Provider store={testStore}>
				<MemoryRouter>
					<QuestionCard question={question} isAnswered={true} />
				</MemoryRouter>
			</Provider>
		);
		const showBtn = screen.getByText("Show");

		expect(showBtn).toBeInTheDocument();
	});
});
