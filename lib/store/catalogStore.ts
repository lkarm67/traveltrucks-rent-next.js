import { create } from "zustand";
import { Camper, CatalogFilters } from "@/types/camper";
import axios from "axios";

interface CatalogState {
  campers: Camper[];
  page: number;
  limit: number;
  filters: CatalogFilters;
  loading: boolean;
  hasMore: boolean;
  setFilters: (filters: CatalogFilters) => void;
  loadCampers: (reset?: boolean) => Promise<void>;
}

export const useCatalogStore = create<CatalogState>((set, get) => ({
  campers: [],
  page: 1,
  limit: 4,
  filters: {},
  loading: false,
  hasMore: true,

  setFilters: (filters: CatalogFilters) => set({ filters, page: 1, campers: [], hasMore: true }),

  loadCampers: async (reset = false) => {
    const { page, limit, filters, campers } = get();
    set({ loading: true });

    try {
      const params: any = { page, limit };

      // додаємо фільтри
      if (filters.location) params.location = filters.location;
      if (filters.bodyType) params.vehicleType = filters.bodyType;
      if (filters.equipment) {
        Object.entries(filters.equipment).forEach(([key, value]) => {
          if (value) params[`equipment.${key}`] = true;
        });
      }

      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const { data } = await axios.get(`${API_URL}/campers`, { params });

      set({
        campers: reset ? data : [...campers, ...data],
        loading: false,
        hasMore: data.length === limit,
        page: reset ? 2 : page + 1,
      });
    } catch (err) {
      console.error(err);
      set({ loading: false });
    }
  },
}));
