import { Sidebar } from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import type { ICountryShort } from "./types";
import { BASE_URL } from "./constans";
import { CountryDetails } from "./components/CountryDetalis/CountryDetalis";

function App() {
  const [countriesList, setCountriesList] = useState<ICountryShort[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch(`${BASE_URL}/all?fields=alpha3Code,name`);
        if (!response.ok) {
          throw new Error();
        }
        const data: ICountryShort[] = await response.json();
        setCountriesList(data);
      } catch (e) {
        console.log(e);
      }
    };
    getCountries();
  }, []);

  return (
    <>
      <Sidebar
        countries={countriesList}
        onSelect={(alpha3Code) => setSelectedCountry(alpha3Code)}
      />
      <CountryDetails countries={selectedCountry ? countriesList.find(c => c.alpha3code === selectedCountry) || null : null} countries={countriesList} />
    </>
  );
}

export default App;
