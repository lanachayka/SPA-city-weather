import { routes } from "../routes";
import { MemoryRouter, Routes } from "react-router-dom";
import { renderWithProviders } from "./renderWithProviders";

test("renders routes correct", async () => {
  const app = renderWithProviders(
    <MemoryRouter
      initialEntries={["/SPA-city-weather/TestCity"]}
      initialIndex={0}
    >
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
  expect(app.getByText("TestCity")).toBeInTheDocument();
  expect(app.getAllByText("23°C")).toHaveLength(2);
});

test("renders routes correct", async () => {
  const app = renderWithProviders(
    <MemoryRouter initialEntries={["/SPA-city-weather"]} initialIndex={0}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
  expect(app.getAllByTestId("city-card")).toHaveLength(1);
});
