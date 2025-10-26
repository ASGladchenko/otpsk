import { useRef, useState } from 'react';

import { cn, Input, useOutsideClick, NormalizeSearchedItemType } from '@shared';

import { List } from '../list';
import { SearchSelectProps } from './types';

import './styles.scss';

export const SearchSelect = ({
  items,
  error,
  search,
  onSelect,
  onChange,
  countries,
  isLoading,
  className,
  activeItem,
}: SearchSelectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const wrapperClass = cn('search-select', className);

  const handleSelect = (item: NormalizeSearchedItemType) => {
    onSelect(item);
    handleBlur();
  };

  const handleChange = (value: string) => {
    onChange(value);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
    if (activeItem) onChange(activeItem.name);
  };

  const handleClear = () => {
    onSelect(null);
    onChange('');
  };

  const isCountry =
    (activeItem?.type === 'country' && activeItem?.name === search.trim()) ||
    search.trim() === '';

  useOutsideClick(handleBlur, ref);

  return (
    <div className={wrapperClass} ref={ref}>
      <Input
        clearable
        onFocus={handleFocus}
        onClear={handleClear}
        onChange={handleChange}
        placeholder="Введіть назву для пошуку"
        value={!isOpen ? activeItem?.name || search : search}
      />

      {isOpen && (
        <List
          error={error || ''}
          isLoading={isLoading}
          onSelect={handleSelect}
          activeItem={activeItem}
          className="search-select__list"
          items={(isCountry ? countries : items) || []}
        />
      )}
    </div>
  );
};
