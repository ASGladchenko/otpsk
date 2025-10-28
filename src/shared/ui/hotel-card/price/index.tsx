import { cn } from '@shared/utils';
import { HotelCardPriceProps } from '../types';

export const Price = ({ amount, currency, variant }: HotelCardPriceProps) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
    minimumFractionDigits: 0,
  }).format(amount);

  const itemClass = cn('hotel-card__price', `hotel-card__price--${variant}`);

  return <span className={itemClass}>{formattedPrice}</span>;
};
