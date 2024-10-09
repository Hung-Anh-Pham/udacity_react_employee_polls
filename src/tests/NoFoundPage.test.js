import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import * as ReactRouter from "react-router-dom"; 

// Mock the useRouteError hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useRouteError: jest.fn(),
}));

describe("ErrorPage Component", () => {

    beforeEach(() => {
        // Mock the useRouteError hook to return null
        ReactRouter.useRouteError.mockReturnValue(null);
    });

    afterEach(() => {
        jest.clearAllMocks(); // Clear any mocks after each test
    });

    it("should render with default error message when no error is provided", () => {
        render(
            <MemoryRouter>
                <ErrorPage />
            </MemoryRouter>
        );

        // Check if the default error message is displayed
        expect(screen.getByText("Oops!")).toBeInTheDocument();
        expect(screen.getByText("Unexpected error occurred")).toBeInTheDocument();
        expect(screen.getByText("Go to homepage")).toBeInTheDocument();
    });

    it("should render with custom error message when code and status are provided", () => {
        const code = "404";
        const status = "Not Found";

        render(
            <MemoryRouter>
                <ErrorPage code={code} status={status} />
            </MemoryRouter>
        );

        // Check if the custom error message is displayed
        expect(screen.getByText("Oops!")).toBeInTheDocument();
        expect(screen.getByText("404 Not Found")).toBeInTheDocument();
        expect(screen.getByText("Go to homepage")).toBeInTheDocument();
    });
});