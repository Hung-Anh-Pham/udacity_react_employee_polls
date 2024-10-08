import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import { createStore } from "redux";
import QuestionList from "../components/QuestionList";
import reducers from "../reducers";
import { questions } from "../utils/_DATA";

describe("Test QuestionList component", () => {
	let testStore;

	beforeAll(() => {
		testStore = createStore(reducers);
	});

	it("Should render correct QuestionList component", async () => {
		let rendering = create(
			<Provider store={testStore}>
				<MemoryRouter>
					<QuestionList questionList={Object.values(questions)} />
				</MemoryRouter>
			</Provider>
		);

		expect(rendering.toJSON()).toMatchSnapshot();
	});
});
