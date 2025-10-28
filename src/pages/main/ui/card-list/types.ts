import { PriceResultSearchType } from '@shared';

export type CardListProps = {
  error?: string;
  idle?: boolean;
  className?: string;
  countryId?: string;
  isLoading?: boolean;
  data: PriceResultSearchType | null;
};
