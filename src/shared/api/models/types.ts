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
  type: 'hotel';
};

export interface HotelType extends ShortHotelType {
  description?: string;
  amenities?: string[];
}

export type SearchedItemType =
  | ShortCountryType
  | ShortCityType
  | ShortHotelType;

export type NormalizeSearchedItemType = {
  id: string;
  name: string;
  type: GeoType;
  image?: string;
  countryId?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

// DELETE
export interface Price {
  id: Id;
  hotel_id: Id;
  start_date: string;
  duration_days: number;
  currency: 'UAH' | 'USD' | 'EUR' | string;
  amount: number;
}

export interface SearchStart {
  token: string;
  allowedAt: number;
}
export type SearchStatus =
  | { state: 'pending'; allowedAt: number }
  | { state: 'ready'; prices: Price[] }
  | { state: 'error'; message: string };
