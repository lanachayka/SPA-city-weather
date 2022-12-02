import { Container, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchHourlyWeather } from "../store/hourlyWeatherSlice";
import { convertKelvinToCelsius } from "../utils/helper";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";

export const CityDetails = () => {
  const { name } = useParams();
  const { hourlyWeather } = useAppSelector((state) => state.hourlyWeather);
  const dispatch = useAppDispatch();
  const [temperatures, setTemperatures] = useState<number[]>([]);
  useEffect(() => {
    if (name) {
      dispatch(fetchHourlyWeather(name));
    }
  }, []);
  useEffect(() => {
    if (hourlyWeather && name && hourlyWeather[name]) {
      const temperaturesArray: number[] = hourlyWeather[name].list.map(
        (item) => {
          return Number(convertKelvinToCelsius(item.main.temp));
        }
      );
      setTemperatures(temperaturesArray);
    }
  }, [hourlyWeather]);
  return (
    <Container fixed style={{ marginTop: "50px" }}>
      <Link to={`/SPA-city-weather`} key={"/SPA-city-weather"}>
        <Button size="large" data-testid="come-back">
          Come back
        </Button>
      </Link>
      <Typography variant="h2" component="div">
        {name}
      </Typography>
      <Sparklines
        data={[
          temperatures[0],
          temperatures[1],
          temperatures[2],
          temperatures[3],
          temperatures[4],
        ]}
        width={100}
        height={20}
        margin={5}
      >
        <SparklinesLine color="blue" />
      </Sparklines>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginInline: "5%",
          gap: "20%",
        }}
      >
        <Typography>{`${temperatures[0]}°C`}</Typography>
        <Typography>{`${temperatures[1]}°C`}</Typography>
        <Typography>{`${temperatures[2]}°C`}</Typography>
        <Typography>{`${temperatures[3]}°C`}</Typography>
        <Typography>{`${temperatures[4]}°C`}</Typography>
      </div>
    </Container>
  );
};
