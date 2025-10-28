import { PriceType, ShortHotelType } from '@shared';

export type CardProps = Omit<ShortHotelType, 'id'> &
  PriceType & {
    className?: string;
    flag?: string | null;
  };
