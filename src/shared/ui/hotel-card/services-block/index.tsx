import { cn, HotelAmenitiesType } from '@shared';

import { prepareData } from './utils';

import './styles.scss';

export type ServicesBlockProps = {
  data: HotelAmenitiesType;
  className?: string;
};

export const ServicesBlock = ({ data, className }: ServicesBlockProps) => {
  const itemClass = cn('hotel-card__services', className);

  const allowedServices = prepareData(data);

  if (!allowedServices.length) {
    return null;
  }

  return (
    <div className={itemClass}>
      <p className="hotel-card__subtitle ">Сервіси</p>

      <div className="hotel-card__services-block">
        {allowedServices.map(({ Icon, title }) => (
          <div key={title} className="hotel-card__service-item">
            <Icon className="hotel-card__service-item-icon" />
            <span className="hotel-card__service-item-title">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
