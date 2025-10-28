import { HotelCardImageProps } from '../types';

export const Image = ({
  src,
  variant,
  name = ' Hotel',
}: HotelCardImageProps) => {
  return (
    <div className={`hotel-card__image hotel-card__image--${variant}`}>
      <img src={src} alt={name} />
    </div>
  );
};
