import { MemoryRouter } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./setup-test";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();


describe("Test QuestionCard component", () => {
	
	let store;

	const question = {
		id: "vthrdm985a262al8qx3do",
		author: "tylermcginnis",
		timestamp: 1467166872634,
	};

    beforeEach(() => {
        store = mockStore({
            users: {
                tylermcginnis: {
                    id: "tylermcginnis",
                    name: "Tyler McGinnis",
                    avatarURL: "url_to_avatar",
                },
            },
            questions: {
                [question.id]: question,
            },
            authedUser: "tylermcginnis",
        });
    });

	it("Should render correct QuestionCard component", async () => {

		renderWithProviders(
			<MemoryRouter>
				<QuestionCard question={question} isAnswered={true} />
			</MemoryRouter>,
			{ store }
		);

		const showBtn = screen.getByText("Show");

		expect(showBtn).toBeInTheDocument();
	});
});
