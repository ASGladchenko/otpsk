import { useEffect } from 'react';

import { useCountryStore } from '../store';

export const useCountry = () => {
  const { countries, isLoading, error, success, fetchCountries } =
    useCountryStore();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return { countries, isLoading, error, success };
};

export const useCountryFlag = (countryId: string | undefined) => {
  const { getCountryFlag } = useCountryStore();
  if (!countryId) return null;

  return getCountryFlag(countryId);
};
