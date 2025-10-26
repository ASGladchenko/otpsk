import { NormalizeSearchedItemType } from '@shared';

export interface SearchFormProps {
  className?: string;
  active: NormalizeSearchedItemType | null;
  setActive: (item: NormalizeSearchedItemType | null) => void;
}
