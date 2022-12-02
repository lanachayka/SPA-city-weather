import { GeocodingAPI, GeocodingAPIResponse } from "../types/API";
import { fetchData } from "./fetchData";

export const geocodingAPI: GeocodingAPI = {
  async getCoordinateByCityName(cityName: string) {
    const response = (await fetchData(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=069a15542effbc5992ff749a5547a952`
    )) as GeocodingAPIResponse[];
    return { lat: response[0].lat, lon: response[0].lon };
  },
};