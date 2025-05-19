import { store } from "../store/store.jsx";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import MovieCard from "../reuseable/MovieCard.jsx";
import { setupListeners } from "@reduxjs/toolkit/query";

const renderWithProvider = (ui) =>
    render(<Provider store={store}>{ui}</Provider>);

describe("MovieCard", () => {
    test("showing loading initially", async () => {
        renderWithProvider(<MovieCard />);
        const result = await screen.findByText(/loading.../i);
        expect(result).toBeInTheDocument();
    });
});

setupListeners(store.dispatch);