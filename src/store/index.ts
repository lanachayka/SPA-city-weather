import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import citiesSlice from "./citiesSlice";
import currentWeatherSlice from "./currentWeatherSlice";
import hourlyWeatherSlice from "./hourlyWeatherSlice";

export const rootReducer = combineReducers({
  cities: citiesSlice.reducer,
  currentWeather: currentWeatherSlice.reducer,
  hourlyWeather: hourlyWeatherSlice.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];



