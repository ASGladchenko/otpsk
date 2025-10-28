import { useRef, useState } from 'react';

import { cn, Input, useOutsideClick, NormalizeSearchedItemType } from '@shared';

import { List } from '../list';
import { SearchSelectProps } from './types';

import './styles.scss';

export const SearchSelect = ({
  items,
  error,
  search,
  onClear,
  onSelect,
  onChange,
  countries,
  isLoading,
  className,
  isLoadForm,
  activeItem,
}: SearchSelectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const wrapperClass = cn('search-select', className);

  const handleSelect = (newItem: NormalizeSearchedItemType) => {
    if (newItem.id === activeItem?.id) return;

    onSelect(newItem);
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
    onClear?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isLoadForm) {
      e.preventDefault();
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
      e.currentTarget.blur();
      handleBlur();
    }

    if (e.key === 'Escape') {
      e.currentTarget.blur();
      handleBlur();
    }
  };

  const isCountry =
    (activeItem?.type === 'country' && activeItem?.name === search.trim()) ||
    search.trim() === '';

  useOutsideClick(handleBlur, ref);

  return (
    <div className={wrapperClass} ref={ref}>
      <Input
        clearable
        ref={inputRef}
        onFocus={handleFocus}
        onClear={handleClear}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
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
