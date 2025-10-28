import { cn } from '@shared/utils';
import { HotelCardTitleProps } from '../types';

export const Title = ({
  title = 'Unknown Hotel',
  variant = `default`,
}: HotelCardTitleProps) => {
  const titleClass = cn('hotel-card__title', `hotel-card__title--${variant}`);

  return <h6 className={titleClass}>{title}</h6>;
};
