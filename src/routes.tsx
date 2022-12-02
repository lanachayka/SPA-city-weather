import { Route } from "react-router-dom";
import { CardList } from "./pages/CardList";
import { CityDetails } from "./pages/CityDetails";

export const routes: JSX.Element[] = [
  <Route
    key={"/SPA-city-weather"}
    path={"/SPA-city-weather"}
    element={<CardList />}
  />,
  <Route
    key={"/SPA-city-weather/:name"}
    path={"/SPA-city-weather/:name"}
    element={<CityDetails />}
  />,
];
