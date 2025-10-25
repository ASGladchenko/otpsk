import { Id } from './types';
import { unwrap } from './unwrap';
import * as mock from './mock-api/api';

export const api = {
  getCountries: () => unwrap(mock.getCountries()),
  searchGeo: (q: string) => unwrap(mock.searchGeo(q)),
  getHotel: (hotelId: Id) => unwrap(mock.getHotel(hotelId)),
  getPrice: (priceId: Id) => unwrap(mock.getPrice(priceId)),
  getHotels: (countryId: Id) => unwrap(mock.getHotels(countryId)),
  getSearchPrices: (token: string) => unwrap(mock.getSearchPrices(token)),
  stopSearchPrices: (token: string) => unwrap(mock.stopSearchPrices(token)),
  startSearchPrices: (countryId: Id) =>
    unwrap(mock.startSearchPrices(countryId)),
} as const;
