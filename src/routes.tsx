import { Route } from "react-router-dom";
import { CardList } from "./pages/CardList";
import { CityDetails } from "./pages/CityDetails";

export const routes: JSX.Element[] = [
  <Route key={"/"} path={"/"} element={<CardList />} />,
  <Route key={"/:name"} path={"/:name"} element={<CityDetails />} />,
];
