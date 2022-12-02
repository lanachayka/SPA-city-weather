import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import type { AppStore, RootState } from "../store";
import citiesSlice from "../store/citiesSlice";
import currentWeatherSlice from "../store/currentWeatherSlice";
import hourlyWeatherSlice from "../store/hourlyWeatherSlice";
import { mockState } from "./mockState";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = mockState,
    store = configureStore({
      reducer: {
        cities: citiesSlice.reducer,
        currentWeather: currentWeatherSlice.reducer,
        hourlyWeather: hourlyWeatherSlice.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
