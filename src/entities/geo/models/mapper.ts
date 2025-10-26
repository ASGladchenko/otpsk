import { Icons, SearchedItemType, NormalizeSearchedItemType } from '@shared';

export function normalizeSearchedItem(
  item: SearchedItemType
): NormalizeSearchedItemType {
  switch (item.type) {
    case 'country': {
      const image = item.flag || undefined;
      return {
        id: String(item.id),
        name: item.name,
        type: item.type,
        image,
        Icon: image ? undefined : Icons.Geo,
      };
    }
    case 'city': {
      return {
        id: String(item.id),
        name: item.name,
        type: item.type,
        countryId: item.countryId,
        Icon: Icons.City,
      };
    }
    case 'hotel': {
      const image = item.img || undefined;
      return {
        id: String(item.id),
        name: item.name,
        type: item.type,
        image,
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
