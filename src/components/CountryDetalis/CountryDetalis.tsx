import { Typography, List, Paper, Box, ListItem } from "@mui/material";
import type { ICountryFull } from "../../types";
import type { ICountryShort } from "../../types";

interface Props {
  country: ICountryFull | null;
  countries: ICountryShort[];
}

export function CountryDetails({ country, countries }: Props) {
    if (!country) {
        return (
            <Typography variant="h5" component="h2">
              Выберите страну, чтобы увидеть детали.
            </Typography>

        );
    }

    const countryBorders = country.borders.map((border) => {
        const borderCountry = countries.find(
            (c) => c.alpha3code === border
        );
        return borderCountry ? borderCountry.name : border;
    });

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                {country.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Столица: {country.capital}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Население: {country.population.toLocaleString()}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Границы:
            </Typography>
            <Paper sx={{ maxHeight: 200, overflow: "auto" }}>
                <List>
                    {countryBorders.map((border) => (
                        <ListItem key={border}>{border}</ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
}
