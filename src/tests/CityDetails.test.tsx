import { CityDetails } from "../pages/CityDetails";
import { renderWithProviders } from "./renderWithProviders";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

 test("correct component render", () => {
   renderWithProviders(
     <BrowserRouter>
       <CityDetails />
     </BrowserRouter>
   );
   expect(screen.getByTestId("come-back")).toBeInTheDocument();
 });
