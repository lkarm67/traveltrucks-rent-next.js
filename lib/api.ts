import axios from 'axios';
export type Camper = {
    id: number;
    name: string;
    type: string;
    pricePerDay: number;
    imageUrl: string;
    description: string;
};

export type CamperListResponse = {
    campers: Camper[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    rating: number;
    reviews: number;
    location: string;
    supportingText: string;
    badges: string[];
    vehicleEquipments: string[];
    vehicleTypes: string[];
    /*badge: Icon[];
    icon: JSX.Element;*/
};

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