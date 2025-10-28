import { HotelCardAdvancedItemProps } from '../../types';

export const AdvancedItem = ({ title, Icon }: HotelCardAdvancedItemProps) => {
  return (
    <div className="hotel-card__location-item">
      <Icon className="hotel-card__location-icon" />

      <span className="hotel-card__location-name">{title}</span>
    </div>
  );
};
