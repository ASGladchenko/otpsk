import { TourByIdType, TourWithoutHotelIDType } from './types';

export const prepareTourById = (
  tour: TourWithoutHotelIDType
): TourByIdType | null => {
  if (!tour) {
    return null;
  }

  const { id, ...rest } = tour;

  return { ...rest, tourId: id };
};
