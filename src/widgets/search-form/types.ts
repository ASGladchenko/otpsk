import { NormalizeSearchedItemType } from '@shared';

export interface SearchFormProps {
  className?: string;
  onSearch: () => void;
  active: NormalizeSearchedItemType | null;
  setActive: (item: NormalizeSearchedItemType | null) => void;
}
