import {
  Button,
  HotelCard,
  ButtonVariant,
  ButtonColorScheme,
  formatDateIntl,
} from '@shared';

import { CardProps } from './types';

export const Card = ({ ...props }: CardProps) => {
  return (
    <HotelCard>
      <HotelCard.Image src={props.img} />

      <HotelCard.Title title={props.name} />

      <HotelCard.Location
        cityName={props.cityName}
        countryName={props.countryName}
        flag={props.flag}
      />
      <HotelCard.DateBlock
        startDate={formatDateIntl(props.startDate) || 'Error'}
      />

      <HotelCard.Price amount={props.amount} currency={props.currency} />

      <Button
        as="link"
        variant={ButtonVariant.Ghost}
        color={ButtonColorScheme.Blue}
        to={`/hotel/${props.hotelID}?priceId=${props.id}`}
      >
        Відкрити ціну
      </Button>
    </HotelCard>
  );
};
