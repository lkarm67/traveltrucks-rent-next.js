import axios from "axios";
import { Camper, CatalogFilters } from "@/types/camper";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const getCampers = async (page = 1, limit = 4, filters?: CatalogFilters): Promise<Camper[]> => {
  let query = `?page=${page}&limit=${limit}`;
  if (filters) {
    if (filters.location) query += `&location=${filters.location}`;
    if (filters.bodyType) query += `&bodyType=${filters.bodyType}`;
    if (filters.equipment) {
      Object.entries(filters.equipment).forEach(([key, value]) => {
        if (value) query += `&equipment.${key}=true`;
      });
    }
  }
  const { data } = await axios.get<Camper[]>(`${API_URL}${query}`);
  return data;
};

export const getCamperById = async (id: string): Promise<Camper> => {
  const { data } = await axios.get<Camper>(`${API_URL}/${id}`);
  return data;
};

