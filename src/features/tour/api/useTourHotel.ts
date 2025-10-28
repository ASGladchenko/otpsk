import { useState, useLayoutEffect } from 'react';

import { useTour, useHotel } from '@entities';

export type UseTourHotelProps = {
  id?: string;
  priceId?: string;
  onError: (msg?: string) => void;
};

export const useTourHotel = ({ id, priceId, onError }: UseTourHotelProps) => {
  const [setIdle, setSetIdle] = useState(true);

  const { data: tour, isLoading: isLoadingTour, fetchTour } = useTour(onError);

  const {
    fetchHotel,
    data: hotel,
    isLoading: isLoadingHotel,
  } = useHotel(onError);

  useLayoutEffect(() => {
    if (!id || !priceId) {
      onError();
      return;
    }

    if (setIdle) {
      fetchTour(priceId);
      fetchHotel(id);
      setSetIdle(false);
    }
  }, [id, priceId, onError, fetchTour, fetchHotel, setIdle]);

  return {
    data: { ...hotel, ...tour },
    isLoading: isLoadingHotel || isLoadingTour,
  };
};
