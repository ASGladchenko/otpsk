import { NormalizeSearchedItemType } from '@shared';

export interface SearchFormProps {
  className?: string;
  onSearch: () => void;
  onClear?: () => void;
  isLoadForm?: boolean;
  active: NormalizeSearchedItemType | null;
  setActive: (item: NormalizeSearchedItemType | null) => void;
}
