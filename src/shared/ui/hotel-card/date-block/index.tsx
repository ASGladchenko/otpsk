import { cn, Icons } from '@shared';

import { HotelCardDateBlockProps } from '../types';

export const DateBlock = ({
  variant,
  startDate,
  timeInterval,
}: HotelCardDateBlockProps) => {
  const itemClass = cn(
    'hotel-card__date-block',
    ` hotel-card__date-block--${variant}`
  );
  switch (variant) {
    case 'advanced':
      return (
        <div className={itemClass}>
          <Icons.Calendar className="hotel-card__date-block-icon" />

          <span className="hotel-card__date-block-start">{startDate}</span>

          {timeInterval && (
            <span className="hotel-card__date-block-interval">
              Тривалість : {timeInterval}
            </span>
          )}
        </div>
      );

    default:
      return (
        <div className={itemClass}>
          <span className="hotel-card__date-block-title">Старт тура</span>
          <span className="hotel-card__date-block-start">{startDate}</span>
        </div>
      );
  }
};
