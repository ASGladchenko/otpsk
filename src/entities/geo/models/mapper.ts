import { Icons, SearchedItemType, NormalizeSearchedItemType } from '@shared';

export function normalizeSearchedItem(
  item: SearchedItemType
): NormalizeSearchedItemType {
  switch (item.type) {
    case 'country': {
      const image = item.flag || undefined;
      return {
        name: item.name,
        type: item.type,
        id: String(item.id),
        countryId: String(item.id),

        image,
        Icon: image ? undefined : Icons.Geo,
      };
    }
    case 'city': {
      return {
        name: item.name,
        type: item.type,
        Icon: Icons.City,
        id: String(item.id),
        countryId: item.countryId,
      };
    }
    case 'hotel': {
      const image = item.img || undefined;
      return {
        image,
        name: item.name,
        type: item.type,
        id: String(item.id),
        countryId: item.countryId,
        Icon: image ? undefined : Icons.Hotel,
      };
    }
  }
}

export const mappedNormalizeSearchedItem = (
  arr: Record<string, SearchedItemType>
) => {
  return Object.values(arr).map((item) => normalizeSearchedItem(item));
};
