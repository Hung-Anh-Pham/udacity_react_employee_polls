import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "../reducers";

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        store = createStore(
            reducers,
            {
                preloadedState,
            }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}