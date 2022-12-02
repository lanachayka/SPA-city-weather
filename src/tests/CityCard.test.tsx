import { CityCard } from "../components/CityCard";
import { renderWithProviders } from "./renderWithProviders";
import { fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("render city card with correct information from state", () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <CityCard cityName="TestCity" />
      </BrowserRouter>
    );
  });
  test("render short information", () => {
    expect(screen.getByText("TestCity")).toBeInTheDocument();
    expect(screen.getByText("moderate rain")).toBeInTheDocument();
    expect(screen.getByText("Temperature: 25")).toBeInTheDocument();
  });
  test("render full information after click on card", () => {
    fireEvent.click(screen.getByTestId("city-card"));
    expect(screen.getByText(/Feels like: 26/i)).toBeInTheDocument();
    expect(screen.getByText(/Max temperature: 27/i)).toBeInTheDocument();
    expect(screen.getByText(/Min temperature: 24/i)).toBeInTheDocument();
    expect(screen.getByText(/Wind Speed: 0.62/i)).toBeInTheDocument();
    expect(screen.getByText(/Clouds: 100%/i)).toBeInTheDocument();
  });
  test("refresh button", () => {
    fireEvent.click(screen.getByTestId("refresh-btn"));
    expect(screen.getByText("Temperature: 25")).toBeInTheDocument();
  });
});
