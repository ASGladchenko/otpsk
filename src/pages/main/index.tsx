import { SearchForm } from '@widgets';
import { useSearchTour } from '@entities';

export const MainPage = () => {
  const { active, onSelect, searchTour, isLoading, error, data } =
    useSearchTour();

  console.log({ data, error, isLoading });

  return (
    <div>
      <SearchForm active={active} setActive={onSelect} onSearch={searchTour} />

      <>{error && <div>{error}</div>}</>
      <>{isLoading && <div>Loading...</div>}</>
      <>{!isLoading && <div>Loaded</div>}</>
    </div>
  );
};
