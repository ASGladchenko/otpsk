import { create } from 'zustand';
import { api, getErrorMessage, NormalizeSearchedItemType } from '@shared';

import { mapCountries, CountriesType } from '../models';

type CountryState = {
  countries: NormalizeSearchedItemType[];
  isLoading: boolean;
  error: string | null;
  success: boolean | null;
  fetchCountries: () => Promise<void>;
  clear: () => void;
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

  clear: () => set({ countries: [], success: null, error: null }),
}));
