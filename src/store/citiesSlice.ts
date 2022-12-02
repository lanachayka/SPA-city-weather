import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { cities: string[] } = {
  cities: [],
};

export default createSlice({
  name: "citiesSlice",
  initialState,
  reducers: {
    getCities: (state) => {
      const citiesFromLocalStorage = localStorage.getItem("cities");
      if (citiesFromLocalStorage) {
        const names: string[] = JSON.parse(citiesFromLocalStorage);
        state.cities = names;
      }
    },
    addCity: (state, action: PayloadAction<string>) => {
      state.cities.push(action.payload);
      localStorage.setItem("cities", JSON.stringify(state.cities));
    },
    deleteCity: (state, action: PayloadAction<string>) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
      localStorage.setItem("cities", JSON.stringify(state.cities));
    },
  },
});
