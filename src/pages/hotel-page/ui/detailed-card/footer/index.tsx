import { Button, HotelCard, ButtonVariant, ButtonColorScheme } from '@shared';

import './styles.scss';

export const CardFooter = ({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}) => {
  return (
    <div className="detailed-card__footer">
      <HotelCard.Price amount={amount} currency={currency} />

      <Button
        disabled
        variant={ButtonVariant.Filled}
        color={ButtonColorScheme.Blue}
      >
        Відкрити ціну
      </Button>
    </div>
  );
};
