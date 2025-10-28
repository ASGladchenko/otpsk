import { useState } from 'react';

import { api, getErrorMessage, HotelType } from '@shared';

export const useHotel = (onError: (error: string) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<HotelType | null>(null);

  const fetchHotel = async (hotelId: string) => {
    setIsLoading(true);

    try {
      const result = (await api.getHotel(Number(hotelId))) as HotelType;

      if (Object.keys(result).length === 0) {
        throw new Error('Hotel not found');
      }
      setData(result);
    } catch (err) {
      onError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, fetchHotel };
};
