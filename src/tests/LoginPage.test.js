import { MemoryRouter } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import { renderWithProviders } from "./setup-test";
import { fireEvent, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe("Test LoginPage component", () => {

    let store;

    beforeEach(() => {
        store = mockStore({
            users: {},
            questions: {},
            authedUser: null,
        });
    });

    it("Should correctly render the LoginPage component", () => {
        const { page } = renderWithProviders(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>,
            { store }
        )

        expect(page).toMatchSnapshot();
    });

    it("Should log in successfully with a valid crendential", () => {
        const username = "sarahedo";
        const password = "password123";

        renderWithProviders(
            <MemoryRouter initialEntries={['/login']}>
                <LoginPage />
            </MemoryRouter>,
            { store }
        )

        const usernameInput = screen.getByPlaceholderText("Username");
        fireEvent.change(usernameInput, { target: { value: username } });

        const passwordInput = screen.getByPlaceholderText("Password");
        fireEvent.change(passwordInput, { target: { value: password } });

        const submitBtn = screen.getByRole("button", { name: /Login/i });
        expect(submitBtn).toBeInTheDocument();

        fireEvent.click(submitBtn);
    })
});