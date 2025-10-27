import { ShortHotelType } from '@shared/api';

export type HotelCacheItemType = Map<string, ShortHotelType>;

export type CacheType = Map<string, HotelCacheItemType>;
