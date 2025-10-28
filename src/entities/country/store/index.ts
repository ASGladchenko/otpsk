import { create } from 'zustand';
import { api, getErrorMessage, NormalizeSearchedItemType } from '@shared';

import { mapCountries, CountriesType } from '../models';

type CountryState = {
  clear: () => void;
  isLoading: boolean;
  error: string | null;
  success: boolean | null;
  fetchCountries: () => Promise<void>;
  countries: NormalizeSearchedItemType[];
  getCountryFlag: (countryId: string) => string | null;
};

export const useCountryStore = create<CountryState>((set, get) => ({
  countries: [],
  isLoading: false,
  error: null,
  success: null,

  fetchCountries: async () => {
    const { countries } = get();
    if (countries.length > 0) return;

    set({ isLoading: true, error: null });

    try {
      const data = (await api.getCountries()) as CountriesType;
      const normalized = mapCountries(data);
      set({ countries: normalized, success: true });
    } catch (err) {
      const message = getErrorMessage(err, 'Failed to fetch countries.');
      set({ error: message });
    } finally {
      set({ isLoading: false });
    }
  },

  getCountryFlag: (countryId: string) => {
    const { countries } = get();
    const country = countries.find((c) => c.countryId === countryId);
    return country ? country.image || null : null;
  },

  clear: () => set({ countries: [], success: null, error: null }),
}));
