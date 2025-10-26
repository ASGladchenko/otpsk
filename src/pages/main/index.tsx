import { useState } from 'react';

import { SearchForm } from '@widgets';
import { NormalizeSearchedItemType } from '@shared';

export const MainPage = () => {
  const [active, setActive] = useState<NormalizeSearchedItemType | null>(null);

  return (
    <div>
      <SearchForm active={active} setActive={setActive} />
    </div>
  );
};
