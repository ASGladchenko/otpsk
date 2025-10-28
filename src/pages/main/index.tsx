import { SearchForm } from '@widgets';
import { useSearchTour } from '@entities';

import { CardList } from './ui';
import { useMemo } from 'react';

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
    <div>
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

      {/* <HotelCard>
        <HotelCard.Image src="https://picsum.photos/id/237/300/150" />

        <HotelCard.Title title="Title" />

        <HotelCard.Location
          cityName="Kyiv"
          countryName="Ukraine"
          flag="https://flagcdn.com/w320/ua.png"
        />
        <HotelCard.DateBlock startDate="12.12.2024" />

        <HotelCard.Price amount={1500} currency="USD" />

        <Button
          as="link"
          to="/ggg"
          variant={ButtonVariant.Ghost}
          color={ButtonColorScheme.Blue}
        >
          Відкрити ціну
        </Button>
      </HotelCard>

      <HotelCard variant="advanced">
        <HotelCard.Title title="Title" variant="advanced" />

        <HotelCard.Location
          variant="advanced"
          cityName="Kyiv"
          countryName="Ukraine"
          flag="https://flagcdn.com/w320/ua.png"
        />

        <HotelCard.Image
          variant="advanced"
          src="https://picsum.photos/id/237/300/150"
        />

        <HotelCard.Description description="Lorem asdlasjkdjkasdk ajsd as aas dsdasd asjkd asdasalsd asd alsd asjd asdas dasdasdLorem asdlasjkdjkasdk ajsd as aas dsdasd asjkd asdasalsd asd alsd asjd asdas dasdasdLorem asdlasjkdjkasdk ajsd as aas dsdasd asjkd asdasalsd asd alsd asjd asdas dasdasd " />

        <HotelCard.DateBlock
          variant="advanced"
          timeInterval="7 днів"
          startDate="12.12.2024"
        />

        <HotelCard.Price amount={1500} currency="USD" />

        <Button
          as="link"
          to="/ggg"
          variant={ButtonVariant.Ghost}
          color={ButtonColorScheme.Blue}
        >
          Відкрити ціну
        </Button>
      </HotelCard> */}
    </div>
  );
};
