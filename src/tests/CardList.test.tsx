import { CardList } from "../pages/CardList";
import { renderWithProviders } from "./renderWithProviders";
import { fireEvent, screen } from "@testing-library/react";

describe("render city card with correct information from state", () => {
  beforeEach(() => {
    renderWithProviders(<CardList />);
  });
  test("render one card", () => {
    expect(screen.getAllByTestId("city-card")).toHaveLength(1);
  });
  test("add new city card", async () => {
    const select = screen.getByTestId("city-select");
    await fireEvent.change(select, { target: { value: "Ivano-Frankivsk" } });
    await fireEvent.click(screen.getByTestId("add-city"));
    expect(screen.getAllByTestId("city-card")).toHaveLength(2);
  });
  test("remove city card", async () => {
    const select = screen.getByTestId("city-select");
    await fireEvent.change(select, { target: { value: "Ivano-Frankivsk" } });
    await fireEvent.click(screen.getAllByTestId("remove-city")[1]);
    expect(screen.getAllByTestId("city-card")).toHaveLength(1);
  });
});
