import { List, ListItemButton, ListItemText, Drawer,} from "@mui/material";
import type { ICountryShort } from "../../types";

interface Props {
  countries: ICountryShort[];
  onSelect: (alpha3Code: string) => void;
}

export function Sidebar({ countries, onSelect }: Props) {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <List sx={{ width: 250 }}>
        {countries.map((country) => (
          <ListItemButton
            key={country.alpha3code}
            onClick={() =>
              onSelect(country.alpha3code)
            }
          >
            <ListItemText
              primary={country.name}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}