export interface ICountryShort {
    name: string;
    alpha3code: string;
    independent: boolean;
}

export interface ICountryFull {
    name: string;
    capital: string;
    population: number;
    borders: string[];
    flag: string;
    alpha3code: string;
}