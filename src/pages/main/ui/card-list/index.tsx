import { memo } from 'react';

import { cn } from '@shared/utils';
import { useCountryFlag } from '@entities';

import { Card } from '../card';
import { prepareData } from './utils';
import { CardListProps } from './types';

import './styles.scss';

export const CardList = memo(
  ({ data, error, isLoading, countryId, className, idle }: CardListProps) => {
    const wrapperClassName = cn('card-list', className);
    const countryFlag = useCountryFlag(countryId);

    const cards = prepareData(data, countryId);

    const isEmpty = cards.length === 0;

    return (
      <div className={wrapperClassName}>
        {error && <div className="card-list__error">{error}</div>}

        {isLoading && <div className="card-list__loading">Loading...</div>}

        {!isLoading && !error && idle && (
          <div className="card-list__empty">
            Виберіть країну та зробіть пошук.
          </div>
        )}

        {!isLoading && !error && !idle && isEmpty && (
          <div className="card-list__empty">
            Нажаль, не знайдено жодного туру.
          </div>
        )}

        {!isLoading &&
          !error &&
          cards &&
          cards.map((item) => (
            <Card
              key={item.hotelID}
              flag={countryFlag}
              {...item}
              className="card-list__item"
            />
          ))}
      </div>
    );
  }
);
