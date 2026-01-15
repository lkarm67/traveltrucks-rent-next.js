export type Camper = {
  id: string;
  name: string;
  pricePerDay: number;
  /*images?: string[];*/
  gallery: CamperImage[];
  location: VehicleLocation;
  vehicleType: VehicleType;
  equipment: VehicleEquipment;
  details: VehicleDetails;

  rating: VehicleRating;
  reviews?: Review[];

  description?: string;
};


export type VehicleEquipment = {
  transmission?: "automatic" | "manual";
  engine?: "petrol" | "diesel" | "hybrid";
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
};

export type VehicleEquipmentKey =
  | "kitchen"
  | "AC"
  | "petrol"
  | "gasStove"
  | "bathroom"
  | "microwave"
  | "radio"
  | "TV"
  | "automatic"
  | "refrigerator"
  | "water";

export type VehicleType = "van" | "fullyIntegrated" | "alcove";

export type VehicleDetails = {
  form?: string;
  length?: number;      // m
  width?: number;       // m
  height?: number;      // m
  tank?: number;        // L
  consumption?: number; // L/100km
};

export const vehicleDetailsMeta: Record<keyof VehicleDetails, { label: string; unit?: string }> = {
  form: { label: "Form" },
  length: { label: "Length", unit: "m" },
  width: { label: "Width", unit: "m" },
  height: { label: "Height", unit: "m" },
  tank: { label: "Tank", unit: "L" },
  consumption: { label: "Consumption", unit: "L/100km" },
};

export type VehicleLocation = {
  city: string;
  country: string;
};

export interface Review {
  id: string;
  reviewer_name: string;
  reviewer_rating: number; // 1-5
  comment: string;
}

export interface VehicleRating {
  rating: number;        // середній рейтинг 0-5
  reviewsCount: number;  // кількість відгуків
}

export function getRatingFromReviews(reviews?: Review[]): VehicleRating {
  if (!reviews || reviews.length === 0) return { rating: 0, reviewsCount: 0 };
  const sum = reviews.reduce((acc, r) => acc + r.reviewer_rating, 0);
  return {
    rating: Number((sum / reviews.length).toFixed(1)),
    reviewsCount: reviews.length,
  };
}

export interface CatalogFilters {
  location?: string; // input місто
  equipment?: Partial<Record<keyof FilterState, boolean>>;
  bodyType?: VehicleType;
}

export interface CamperImage {
  original?: string;
  thumb?: string;
}

export interface FilterState {
  form: string;
  AC: boolean;
  transmission: string;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
} 