import { useRef, useState } from 'react';

import {
  api,
  withRetry,
  SearchStart,
  getErrorMessage,
  loadHotelsByCountryId,
  PriceResultSearchType,
  NormalizeSearchedItemType,
} from '@shared';

import { msUntil } from '../utils';

type CodedError = Error & { code?: string };

export const useSearchTour = () => {
  const [active, setActive] = useState<NormalizeSearchedItemType | null>(null);

  const [idle, setIdle] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PriceResultSearchType>({});
  const [isLoadingCancel, setIsLoadingCancel] = useState(false);

  const lastArg = useRef<NormalizeSearchedItemType | null>(null);
  const token = useRef<string | null>(null);
  const nextTime = useRef<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { run, cancel } = withRetry(api.getSearchPrices);

  const abortSearch = async () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (token.current) {
      setIsLoadingCancel(true);
      await api.stopSearchPrices(token.current || '');
      setIsLoadingCancel(false);
    }

    token.current = null;
    nextTime.current = null;
    cancel();
  };

  const searchPrices = async () => {
    if (!token.current) {
      return Promise.reject(new Error('No search token or argument'));
    }
    setIdle(false);

    try {
      const result = (await run(token.current)) as Record<
        string,
        PriceResultSearchType
      >;
      await loadHotelsByCountryId(lastArg.current?.countryId || '');
      setData(result?.prices || {});
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const search = async (countryID: string) => {
    setError(null);

    setIsLoading(true);

    try {
      const searchStart = (await api.startSearchPrices(
        countryID
      )) as SearchStart;

      token.current = searchStart.token;
      nextTime.current = searchStart.waitUntil;

      timerRef.current = setTimeout(() => {
        searchPrices();
        timerRef.current = null;
      }, msUntil(nextTime.current));
    } catch (err) {
      const message = getErrorMessage(err, 'Failed to get search token');

      const error: CodedError = new Error(message);
      error.code = 'GET_TOKEN_ERROR';

      setIsLoading(false);
      return Promise.reject(error);
    }
  };

  const handleChangeActive = (item: NormalizeSearchedItemType | null) => {
    setActive(item);
    abortSearch();
  };

  const searchTour = async () => {
    abortSearch();

    if (active && active.countryId !== lastArg.current?.countryId) {
      try {
        await search(active.countryId);
      } catch (err) {
        setError(getErrorMessage(err));
        setData({});
      }
    }

    lastArg.current = active;
  };

  const reset = () => {
    setData({});
    setError(null);
    setIsLoading(false);
    lastArg.current = null;
    abortSearch();
    setIdle(true);
  };

  return {
    data,
    idle,
    reset,
    error,
    active,
    isLoading,
    searchTour,
    isLoadingCancel,
    lastArg: lastArg.current,
    onSelect: handleChangeActive,
  };
};
