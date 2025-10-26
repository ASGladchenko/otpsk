import { Icons, NormalizeSearchedItemType } from '@shared';

import { CountriesType } from './types';

export const mapCountries = (
  data: CountriesType
): NormalizeSearchedItemType[] => {
  return Object.values(data).map((value) => ({
    type: 'country',
    name: value.name,
    id: String(value.id),
    countryId: String(value.id),
    image: value.flag || undefined,
    Icon: value.flag ? undefined : Icons.Geo,
  }));
};
