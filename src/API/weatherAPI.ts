import {
  WeatherAPI,
  CurrentWeatherAPIResponse,
  HourlyWeatherAPIResponse,
  Coordinates,
} from "../types/API";
import { fetchData } from "./fetchData";

export const weatherAPI: WeatherAPI = {
  async getCurrentWeather(coordinates: Coordinates) {
    return (await fetchData(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=069a15542effbc5992ff749a5547a952`
    )) as CurrentWeatherAPIResponse;
  },
  async getHourlyWeather(coordinates: Coordinates) {
    return (await fetchData(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=069a15542effbc5992ff749a5547a952`
    )) as HourlyWeatherAPIResponse;
  },
};
