import { Typography, List, Paper, Box, ListItem } from "@mui/material";
import type { ICountryFull } from "../../types";
import type { ICountryShort } from "../../types";

interface Props {
  country: ICountryFull | null;
  countries: ICountryShort[];
}

export function CountryDetails({ country, countries }: Props) {
  const countryName = country?.name || "Unknown Country";
  return (
    <Typography variant="h5" component="h2">
      {countryName}
    </Typography>
  );
}
