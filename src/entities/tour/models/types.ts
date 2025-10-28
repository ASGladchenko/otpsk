import { PriceType } from '@shared/api';

export type TourWithoutHotelIDType = Omit<PriceType, 'hotelID'>;

export type TourByIdType = Omit<TourWithoutHotelIDType, 'id'> & {
  tourId: string;
};
