import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Camper, CatalogFilters } from "@/types/camper";
import axios from "axios";

interface AppState {
  campers: Camper[];
  page: number;
  limit: number;
  filters: CatalogFilters;
  loading: boolean;
  hasMore: boolean;

  favorites: string[]; // список id обраних

  // дії
  setFilters: (filters: CatalogFilters) => void;
  loadCampers: (reset?: boolean) => Promise<void>;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      campers: [],
      currentCamper: null,
      page: 1,
      limit: 4,
      filters: {
        location: "",
        form: "",
        AC: false,
        transmission: "",
        kitchen: false,
        TV: false,
        bathroom: false,
      },
      loading: false,
      hasMore: true,
      favorites: [],

      // --- Фільтри ---
      setFilters: (filters) => set(
        { filters, page: 1, campers: [], hasMore: true }
      ),

      // --- Завантаження списку ---
      loadCampers: async (reset = false) => {
        const { page, limit, filters, campers } = get();
        set({ loading: true });

        try {
          const params: Record<string, string | number | boolean> = { page, limit };

          if (filters.location) params.location = filters.location;
          if (filters.bodyType) params.vehicleType = filters.bodyType;
          if (filters.equipment) {
            Object.entries(filters.equipment).forEach(([key, value]) => {
              if (value) params[`equipment.${key}`] = true;
            });
          }

          const API_URL = process.env.NEXT_PUBLIC_API_URL;
          if (!API_URL) throw new Error("API URL is missing");

          const { data } = await axios.get<Camper[]>(
            `${API_URL}/campers`,
            { params }
          );

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

      // --- Обрані ---
      toggleFavorite: (id) => {
        const { favorites } = get();
        set({
          favorites: favorites.includes(id)
            ? favorites.filter((favId) => favId !== id)
            : [...favorites, id],
        });
      },
      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: "app-store",
      version: 1,
      migrate: (persistedState: any, version) => {
        return {
          ...persistedState,
          campers: Array.isArray(persistedState.campers)
            ? persistedState.campers
            : [],
        };
      },
    }
  )
);
