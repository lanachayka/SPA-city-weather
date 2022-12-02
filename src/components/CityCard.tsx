import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchCurrentWeather } from "../store/currentWeatherSlice";
import { convertKelvinToCelsius } from "../utils/helper";

type Props = {
  cityName: string;
};

export const CityCard: React.FC<Props> = ({ cityName }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const {currentWeather} = useAppSelector(
    (state) => state.currentWeather
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentWeather(cityName));
  }, [cityName]);
  return (
    <Card
      sx={{ minWidth: 275 }}
      onClick={() => setShowDetails((prev) => !prev)}
      data-testid="city-card"
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Weather in
        </Typography>
        <Typography variant="h5" component="div">
          {cityName}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {currentWeather &&
            currentWeather[cityName] &&
            currentWeather[cityName].weather[0].description}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          Temperature:{" "}
          {currentWeather &&
            currentWeather[cityName] &&
            convertKelvinToCelsius(currentWeather[cityName].main.temp)}
        </Typography>
        {showDetails && (
          <Typography sx={{ mb: 1.5 }}>
            Feels like:{" "}
            {currentWeather &&
              currentWeather[cityName] &&
              convertKelvinToCelsius(currentWeather[cityName].main.feels_like)}
            <br></br>
            Max temperature:{" "}
            {currentWeather &&
              currentWeather[cityName] &&
              convertKelvinToCelsius(currentWeather[cityName].main.temp_max)}
            <br></br>
            Min temperature:{" "}
            {currentWeather &&
              currentWeather[cityName] &&
              convertKelvinToCelsius(currentWeather[cityName].main.temp_min)}
            <br></br>
            Wind Speed:{" "}
            {currentWeather &&
              currentWeather[cityName] &&
              currentWeather[cityName].wind.speed}
            <br></br>
            Clouds:{" "}
            {currentWeather &&
              currentWeather[cityName] &&
              currentWeather[cityName].clouds.all}
            %
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          data-testid="refresh-btn"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(fetchCurrentWeather(cityName));
          }}
        >
          Refresh
        </Button>
        {showDetails && (
          <Link
            to={`/SPA-city-weather/${cityName}`}
            key={"/SPA-city-weather/:name"}
          >
            <Button size="small" data-testid="learn-more">
              Learn More
            </Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
};
