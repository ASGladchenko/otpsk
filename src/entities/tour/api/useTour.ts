import { useState } from 'react';

import { api, getErrorMessage } from '@shared';

import {
  TourByIdType,
  prepareTourById,
  TourWithoutHotelIDType,
} from '../models';

export const useTour = (onError: (error: string) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TourByIdType | null>(null);

  const fetchTour = async (priceId: string) => {
    setIsLoading(true);

    try {
      const result = (await api.getPrice(priceId)) as TourWithoutHotelIDType;

      if (Object.keys(result).length === 0) {
        throw new Error('Hotel not found');
      }

      setData(prepareTourById(result));
    } catch (err) {
      onError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, fetchTour };
};
