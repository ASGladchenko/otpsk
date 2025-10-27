import { api } from '@shared/api';

import { CacheType, HotelCacheItemType } from './types';

let _hotelCache: CacheType | null = null;

export const loadHotelsByCountryId = async (countryId: string) => {
  const isCountryCached = _hotelCache?.has(countryId);

  if (!isCountryCached) {
    const hotels = (await api.getHotels(countryId)) as HotelCacheItemType;

    _hotelCache?.set(countryId, hotels);
  }
};

export const getHotelsByCountryId = (countryId: string) => {
  return _hotelCache?.get(countryId) || null;
};

export const initializeHotelCache = () => {
  _hotelCache = new Map();
};
