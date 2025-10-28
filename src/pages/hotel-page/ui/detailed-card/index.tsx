import { HotelCard, formatDateIntl, getFormattedDaysBetween } from '@shared';

import { CardFooter } from './footer';
import { DetailedCardProps } from './types';

export const DetailedCard = ({ className, data }: DetailedCardProps) => {
  return (
    <HotelCard
      variant="advanced"
      className={className}
      renderFooter={() => (
        <CardFooter amount={data.amount} currency={data.currency} />
      )}
    >
      <HotelCard.Title title={data.name} variant="advanced" />

      <HotelCard.Location
        variant="advanced"
        cityName={data.cityName}
        countryName={data.countryName}
      />

      <HotelCard.Image variant="advanced" src={data.img} />

      <HotelCard.Description description={data.description} />

      <HotelCard.ServicesBlock data={data.services} />

      <HotelCard.DateBlock
        variant="advanced"
        startDate={formatDateIntl(data.startDate) || 'Error'}
        timeInterval={getFormattedDaysBetween(data.startDate, data.endDate)}
      />
    </HotelCard>
  );
};
