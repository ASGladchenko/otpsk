export type Id = string | number;

export type GeoType = 'country' | 'city' | 'hotel';

export type ShortCountryType = {
  name: string;
  id: string;
  flag: string;
  type: 'country';
};

export type ShortCityType = {
  id: number;
  name: string;
  countryId: string;
  type: 'city';
};

export type ShortHotelType = {
  id: number;
  name: string;
  img: string;
  cityId: number;
  cityName: string;
  countryId: string;
  countryName: string;
};

export interface ShortHotelWithType extends ShortHotelType {
  type: 'hotel';
}

export interface HotelType extends ShortHotelType {
  description?: string;
  amenities?: string[];
}

export type SearchedItemType =
  | ShortCountryType
  | ShortCityType
  | ShortHotelWithType;

export type NormalizeSearchedItemType = {
  id: string;
  name: string;
  type: GeoType;
  image?: string;
  countryId: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

export interface SearchStart {
  token: string;
  waitUntil: string;
}

export interface PriceType {
  id: string;
  hotelID: Id;
  amount: number;
  endDate: string;
  startDate: string;
  currency: 'uah' | 'usd' | 'eur' | string;
}

export type PriceResultSearchType = Record<string, PriceType>;
