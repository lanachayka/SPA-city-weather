import { weatherAPI } from "./../API/weatherAPI";
import { geocodingAPI } from "./../API/geocodingApi";
import { HourlyWeatherAPIResponse } from "./../types/API";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: {
  hourlyWeather: { [key: string]: HourlyWeatherAPIResponse } | null;
} = { hourlyWeather: null };

export const fetchHourlyWeather = createAsyncThunk(
  "hourlyWeather/fetchHourlyWeather",
  async function (cityName: string) {
    try {
      const coordinates = await geocodingAPI.getCoordinateByCityName(cityName);
      const hourlyWeather = await weatherAPI.getHourlyWeather(coordinates);
      return { [cityName]: hourlyWeather };
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
    builder.addCase(fetchHourlyWeather.fulfilled, (state, action) => {
      if (action.payload) {
        state.hourlyWeather = { ...state.hourlyWeather, ...action.payload };
      }
    });
  },
});
