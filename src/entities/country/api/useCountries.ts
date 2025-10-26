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
