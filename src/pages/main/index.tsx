import { useMemo } from 'react';

import { SearchForm } from '@widgets';
import { useSearchTour } from '@entities';

import { CardList } from './ui';

export const MainPage = () => {
  const {
    data,
    idle,
    error,
    active,
    reset,
    lastArg,
    onSelect,
    isLoading,
    searchTour,
    isLoadingCancel,
  } = useSearchTour();

  const cardListData = useMemo(() => {
    return data;
  }, [data]);

  return (
    <>
      <SearchForm
        active={active}
        onClear={reset}
        setActive={onSelect}
        onSearch={searchTour}
        isLoadForm={isLoading || isLoadingCancel}
      />

      <CardList
        idle={idle}
        data={cardListData}
        isLoading={isLoading}
        error={error || undefined}
        countryId={lastArg?.countryId}
      />
    </>
  );
};
