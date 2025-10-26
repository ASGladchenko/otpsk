import { cn } from '@shared/utils';

import { ListProps } from './types';

import './styles.scss';

export const List = ({
  items,
  error,
  onSelect,
  className,
  isLoading,
  activeItem,
  emptyMessage = 'No items found',
}: ListProps) => {
  const wrapperClass = cn('search-list', className);

  return (
    <div className={wrapperClass}>
      {error && <div className="search-list--error">{error}</div>}

      {isLoading && (
        <div className="search-list--loading">
          <div className="search-list--spinner" />
        </div>
      )}

      {!isLoading && !error && items.length === 0 && (
        <div className="search-list--empty">{emptyMessage}</div>
      )}

      <ul className="search-list__items scroll-bar-grey">
        {!isLoading &&
          !error &&
          items.length > 0 &&
          items.map((item) => {
            const isActive = item.id === activeItem?.id;

            const itemClass = cn('search-list__item', isActive && 'active');

            return (
              <li
                key={item.id}
                className={itemClass}
                onClick={() => onSelect?.(item)}
              >
                {item.image && (
                  <img
                    src={item.image}
                    className="search-list__item-icon"
                    alt={item.name}
                  />
                )}

                {item.Icon && <item.Icon className="search-list__item-icon" />}

                <span className="search-list__item-name">{item.name}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
