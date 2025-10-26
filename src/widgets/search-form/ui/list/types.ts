import { NormalizeSearchedItemType } from '@shared';

export interface ListProps {
  items: NormalizeSearchedItemType[];
  error?: string;
  className?: string;
  isLoading?: boolean;
  emptyMessage?: string;
  activeItem?: NormalizeSearchedItemType | null;
  onSelect?: (item: NormalizeSearchedItemType) => void;
}
