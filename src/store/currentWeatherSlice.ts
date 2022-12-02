import { geocodingAPI } from './../API/geocodingApi';
import { weatherAPI } from './../API/weatherAPI';
import { CurrentWeatherAPIResponse } from "./../types/API";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: {
  currentWeather: { [key: string]: CurrentWeatherAPIResponse } | null;
} = { currentWeather: null};

export const fetchCurrentWeather = createAsyncThunk(
  "currentWeather/fetchCurrentWeather",
  async function (cityName: string) {
    try {
      const coordinates = await geocodingAPI.getCoordinateByCityName(cityName);
      const currentWeather = await weatherAPI.getCurrentWeather(coordinates);
      return { [cityName]: currentWeather };
    } catch (error) {
      throw error;
    }
  }
);

export default createSlice({
  name: "currentWeatherSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      if (action.payload) {
        state.currentWeather = { ...state.currentWeather, ...action.payload };
      }
    });
  },
});
