import { cn, Icons } from '@shared';

import { AdvancedItem } from './advanced-item';
import { HotelCardLocationProps } from '../types';

export const Location = ({
  flag,
  cityName,
  countryName,
  variant = 'default',
}: HotelCardLocationProps) => {
  const locationClass = cn(
    'hotel-card__location',
    `hotel-card__location--${variant}`
  );

  switch (variant) {
    case 'advanced':
      return (
        <div className={locationClass}>
          <AdvancedItem title={countryName} Icon={Icons.Geo} />

          <AdvancedItem title={cityName} Icon={Icons.City} />
        </div>
      );

    default:
      return (
        <div className={locationClass}>
          {flag ? (
            <img
              src={flag}
              alt={`${cityName}, ${countryName}`}
              className="hotel-card__location-icon"
            />
          ) : (
            <Icons.Geo className="hotel-card__location-icon" />
          )}

          <span className="hotel-card__location-name">
            {countryName}, {cityName}
          </span>
        </div>
      );
  }
};
