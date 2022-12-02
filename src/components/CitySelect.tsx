import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

type Props = {
  city: string | undefined;
  setCity: (value: string) => void;
};

export const CitySelect: React.FC<Props> = ({ city, setCity }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="city-select-label">City</InputLabel>
      <Select
        labelId="city-select-label"
        id="city-select"
        value={city ?? ""}
        label="City"
        onChange={(e) => setCity(e.target.value)}
        inputProps={{ "data-testid": "city-select" }}
      >
        <MenuItem value={"Kyiv"}>Kyiv</MenuItem>
        <MenuItem value={"Lviv"}>Lviv</MenuItem>
        <MenuItem value={"Kharkiv"}>Kharkiv</MenuItem>
        <MenuItem value={"Odesa"}>Odesa</MenuItem>
        <MenuItem value={"Dnipro"}>Dnipro</MenuItem>
        <MenuItem value={"Ternopil"}>Ternopil</MenuItem>
        <MenuItem value={"Ivano-Frankivsk"}>Ivano-Frankivsk</MenuItem>
      </Select>
    </FormControl>
  );
};
