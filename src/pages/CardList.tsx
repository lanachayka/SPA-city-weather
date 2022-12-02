import { Container, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { CityCard } from "../components/CityCard";
import { CitySelect } from "../components/CitySelect";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import citiesSlice from "../store/citiesSlice";

export const CardList: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>();
  const { cities } = useAppSelector((state) => state.cities);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(citiesSlice.actions.getCities());
  }, []);
  const addNewCity = () => {
    if (selectedCity) {
      dispatch(citiesSlice.actions.addCity(selectedCity));
    }
  };
  const removeCity = (city: string) => {
    dispatch(citiesSlice.actions.deleteCity(city));
  };
  return (
    <Container fixed style={{ marginTop: "50px" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={8}>
          <CitySelect city={selectedCity} setCity={setSelectedCity} />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={addNewCity}
            size="large"
            data-testid="add-city"
          >
            + Add new city
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginBlock: "10px" }}>
        {cities.map((city) => (
          <Grid item xs={6} key={city}>
            <Button onClick={() => removeCity(city)} data-testid="remove-city">
              Remove city
            </Button>
            <CityCard cityName={city} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
