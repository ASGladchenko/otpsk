import {
  ShortHotelType,
  getHotelsByCountryId,
  PriceResultSearchType,
} from '@shared';

export const prepareData = (
  data: PriceResultSearchType | null,
  countryId: string | undefined
) => {
  if (!data || !countryId) return [];

  const countryHotels = getHotelsByCountryId(countryId);

  return Object.values(data)
    .map((value) => {
      const hotelID = value.hotelID;

      const hotelInfo = countryHotels?.[
        hotelID as keyof typeof countryHotels
      ] as Omit<ShortHotelType, 'id'> & { id?: string };

      delete hotelInfo?.id;

      return { ...value, ...hotelInfo };
    })
    .sort((a, b) => a.amount - b.amount);
};
