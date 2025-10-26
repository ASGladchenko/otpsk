import { NormalizeSearchedItemType } from '@shared/api';

export interface SearchSelectProps {
  search: string;
  className?: string;
  isLoading?: boolean;
  error?: string | null;
  onChange: (value: string) => void;
  countries?: NormalizeSearchedItemType[];
  items: NormalizeSearchedItemType[] | null;
  activeItem: NormalizeSearchedItemType | null;
  onSelect: (item: NormalizeSearchedItemType | null) => void;
}
