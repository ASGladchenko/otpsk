import { cn } from '@shared';

import { Title } from './title';
import { Image } from './image';
import { Price } from './price';
import { Location } from './location';
import { HotelCardProps } from './types';
import { DateBlock } from './date-block';
import { Description } from './description';

import './styles.scss';
import { ServicesBlock } from './services-block';

export const HotelCard = ({
  children,
  className,
  renderFooter,
  variant = 'default',
}: HotelCardProps) => {
  const wrapperClass = cn('hotel-card', `hotel-card--${variant}`, className);

  return (
    <div className={wrapperClass}>
      {children}

      {renderFooter ? renderFooter() : null}
    </div>
  );
};

HotelCard.Title = Title;
HotelCard.Image = Image;
HotelCard.Price = Price;
HotelCard.Location = Location;
HotelCard.DateBlock = DateBlock;
HotelCard.Description = Description;
HotelCard.ServicesBlock = ServicesBlock;
