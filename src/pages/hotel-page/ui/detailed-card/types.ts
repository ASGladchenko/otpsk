import { HotelType } from '@shared/api';
import { TourByIdType } from '@entities';

export interface DetailedCardData extends HotelType, TourByIdType {}

export interface DetailedCardProps {
  data: DetailedCardData;
  className?: string;
}
