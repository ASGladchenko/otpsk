export type HotelCardVariant = 'default' | 'advanced';

export type HotelCardTitleProps = {
  title: string;
  variant?: HotelCardVariant;
};

export type HotelCardLocationProps = {
  flag?: string | null;
  cityName: string;
  countryName: string;
  variant?: HotelCardVariant;
};

export type HotelCardAdvancedItemProps = {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type HotelCardImageProps = {
  src: string;
  name?: string;
  variant?: HotelCardVariant;
};

export type HotelCardPriceProps = {
  amount: number;
  currency: string;
  variant?: HotelCardVariant;
};

export type HotelCardDateBlockProps =
  | {
      variant: 'advanced';
      startDate: string;
      timeInterval: string;
    }
  | {
      variant?: 'default';
      startDate: string;
      timeInterval?: never;
    };

export type HotelCardProps = {
  className?: string;
  variant?: HotelCardVariant;
  children?: React.ReactNode;
  renderFooter?: () => React.ReactNode;
};
