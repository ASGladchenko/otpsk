import { useMemo, useState, useEffect, useCallback, useRef } from 'react';

import {
  api,
  debounce,
  getErrorMessage,
  SearchedItemType,
  NormalizeSearchedItemType,
} from '@shared';

import { mappedNormalizeSearchedItem } from '../models';

export interface UseSearchGeoProps {
  minLength?: number;
}

export const useSearchGeo = () => {
  const cache = useRef<Map<string, NormalizeSearchedItemType[]>>(new Map());

  const [search, setSearch] = useState<string>('');

  const [data, setData] = useState<NormalizeSearchedItemType[] | null>(null);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [idle, setIdle] = useState<boolean>(true);

  const setNewCache = (key: string, value: NormalizeSearchedItemType[]) => {
    cache.current.set(key.replaceAll(' ', ''), value);
  };

  const searchGeo = useCallback(async (value: string) => {
    setLoading(true);
    setData(null);
    setError(null);
    setIdle(false);

    const cached = cache.current.get(value.replaceAll(' ', ''));

    if (cached) {
      setData(cached);
      setLoading(false);
      return;
    }

    try {
      const res = (await api.searchGeo(value)) as Record<
        string,
        SearchedItemType
      >;
      const normalized = mappedNormalizeSearchedItem(res);

      setData(normalized);
    } catch (error) {
      const message = getErrorMessage(
        error,
        'Failed to fetch, connect with support.'
      );
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetch = useMemo(
    () =>
      debounce(async (value: string) => {
        await searchGeo(value);
      }, 330),
    [searchGeo]
  );

  const handleChange = (value: string) => {
    setSearch(value);
    debouncedFetch(value);
  };

  useEffect(() => {
    return () => debouncedFetch.cancel();
  }, [debouncedFetch]);

  return {
    data,
    isLoading,
    error,
    idle,
    search,
    onChange: handleChange,
    setCache: setNewCache,
  };
};
