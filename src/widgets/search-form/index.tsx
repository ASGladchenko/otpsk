import { useCountry, useSearchGeo } from '@entities';
import {
  cn,
  Button,
  ButtonVariant,
  ButtonColorScheme,
  NormalizeSearchedItemType,
} from '@shared';

import { SearchSelect } from './ui';
import { SearchFormProps } from './types';

import './styles.scss';

export const SearchForm = ({
  active,
  className,
  setActive,
}: SearchFormProps) => {
  const { countries } = useCountry();

  const { data, search, onChange, error, isLoading, setCache } = useSearchGeo();

  const wrapperClassName = cn('search-form', className);

  const handleSelect = (item: NormalizeSearchedItemType | null) => {
    setActive(item);

    if (item && data) setCache(item.name, data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted with:', active);
  };

  return (
    <form className={wrapperClassName} onSubmit={handleSubmit}>
      <h3 className="search-form__title">Форма пошуку турнірів</h3>

      <div className="search-form__controls">
        <SearchSelect
          search={search}
          items={data || []}
          onChange={onChange}
          activeItem={active}
          countries={countries}
          isLoading={isLoading}
          onSelect={handleSelect}
          error={error || undefined}
          className="search-form__select"
        />

        <Button
          type="submit"
          disabled={!active}
          color={ButtonColorScheme.Blue}
          variant={ButtonVariant.Filled}
        >
          Знайти
        </Button>
      </div>
    </form>
  );
};
