import { RootState } from './../store/index';

export const mockState: RootState = {
  cities: { cities: ["TestCity"] },
  currentWeather: {
    currentWeather: {
      ["TestCity"]: {
        coord: {
          lon: 10.99,
          lat: 44.34,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
          },
        ],
        base: "stations",
        main: {
          temp: 298.48,
          feels_like: 298.74,
          temp_min: 297.56,
          temp_max: 300.05,
          pressure: 1015,
          humidity: 64,
          sea_level: 1015,
          grnd_level: 933,
        },
        visibility: 10000,
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18,
        },
        rain: {
          "1h": 3.16,
        },
        clouds: {
          all: 100,
        },
        dt: 1661870592,
        sys: {
          type: 2,
          id: 2075663,
          country: "IT",
          sunrise: 1661834187,
          sunset: 1661882248,
        },
        timezone: 7200,
        id: 3163858,
        name: "TestCity",
        cod: 200,
      },
    },
  },
  hourlyWeather: {
    hourlyWeather: {
      ["TestCity"]: {
        cod: "200",
        message: 0,
        cnt: 96,
        list: [
          {
            dt: 1661875200,
            main: {
              temp: 296.34,
              feels_like: 296.02,
              temp_min: 296.34,
              temp_max: 298.24,
              pressure: 1015,
              sea_level: 1015,
              grnd_level: 933,
              humidity: 50,
              temp_kf: -1.9,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 97,
            },
            wind: {
              speed: 1.06,
              deg: 66,
              gust: 2.16,
            },
            visibility: 10000,
            pop: 0.32,
            rain: {
              "1h": 0.13,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-30 16:00:00",
          },
          {
            dt: 1661878800,
            main: {
              temp: 296.31,
              feels_like: 296.07,
              temp_min: 296.2,
              temp_max: 296.31,
              pressure: 1015,
              sea_level: 1015,
              grnd_level: 932,
              humidity: 53,
              temp_kf: 0.11,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 95,
            },
            wind: {
              speed: 1.58,
              deg: 103,
              gust: 3.52,
            },
            visibility: 10000,
            pop: 0.4,
            rain: {
              "1h": 0.24,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-30 17:00:00",
          },
          {
            dt: 1661882400,
            main: {
              temp: 294.94,
              feels_like: 294.74,
              temp_min: 292.84,
              temp_max: 294.94,
              pressure: 1015,
              sea_level: 1015,
              grnd_level: 931,
              humidity: 60,
              temp_kf: 2.1,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 93,
            },
            wind: {
              speed: 1.97,
              deg: 157,
              gust: 3.39,
            },
            visibility: 10000,
            pop: 0.33,
            rain: {
              "1h": 0.2,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-30 18:00:00",
          },
        ],
        city: {
          id: 3163858,
          name: "TestCity",
          coord: {
            lat: 44.34,
            lon: 10.99,
          },
          country: "IT",
          population: 4593,
          timezone: 7200,
          sunrise: 1661834187,
          sunset: 1661882248,
        },
      },
    },
  },
};
