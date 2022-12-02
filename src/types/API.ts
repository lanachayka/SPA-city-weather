export type GeocodingAPIResponse = {
  name: string;
  local_names: {
    [key: string]: string;
  };
  lat: number;
  lon: number;
  country: string;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
  temp_kf?: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type Rain = {
  "1h": number;
};

export type Clouds = {
  all: number;
};

export type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type City = {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type HourlyWeather = {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type CurrentWeatherAPIResponse = {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type HourlyWeatherAPIResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: HourlyWeather[];
  city: City;
};

export type Coordinates = {
  lat: number;
  lon: number;
};

export type GeocodingAPI = {
  getCoordinateByCityName: (cityName: string) => Promise<Coordinates>;
};

export type WeatherAPI = {
  getCurrentWeather: (
    coordinates: Coordinates
  ) => Promise<CurrentWeatherAPIResponse>;
  getHourlyWeather: (
    coordinates: Coordinates
  ) => Promise<HourlyWeatherAPIResponse>;
};
