export interface CountryType {
  id: string;
  name: string;
  flag: string;
}

export type CountriesType = {
  [key: string]: CountryType;
};
