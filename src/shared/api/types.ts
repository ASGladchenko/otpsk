export type Id = string | number;

export type GeoType = 'country' | 'city' | 'hotel';

export interface Country {
  id: Id;
  name: string;
  code?: string;
}
export interface City {
  id: Id;
  name: string;
  countryId: Id;
}
export interface HotelShort {
  id: Id;
  name: string;
  countryId: Id;
  cityId: Id;
  image?: string;
}
export interface Hotel extends HotelShort {
  description?: string;
  amenities?: string[];
}

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
