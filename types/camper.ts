export type Camper = {
    id: number;
    name: string;
    type: string;
    pricePerDay: number;
    imageUrl: string;
    rating: number;
    reviews: number;
    location: string;
    supportingText: string;
};

export type VehicleEquipment = {
    id: number;
    name: string;
    icon: JSX.Element;
}

export type VehicleType = {
    id: number;
    name: string;
    icon: JSX.Element;
}

export type VehicleDetails = {
    form: string;
    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string;
}

export type CamperListResponse = {
    campers: Camper[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
};
