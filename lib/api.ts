import axios from 'axios';
import { Camper, CamperListResponse } from '@/type/camper';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const getCampers = async (page: number, pageSize: number): Promise<CamperListResponse> => {
    const res = await axios.get<CamperListResponse>('/', {
        params: {
            page,
            pageSize
        }
    });
    return res.data;
};

export const getCamperById = async (id: number): Promise<Camper> => {
    const res = await axios.get<Camper>(`/${id}`);
    return res.data;
};
