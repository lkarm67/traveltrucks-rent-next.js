import { VehicleDetails } from "@/types/camper";

export const vehicleDetailsMeta: Record<
  keyof VehicleDetails,
  { label: string; unit?: string }
> = {
  form: { label: "Form" },
  length: { label: "Length", unit: "m" },
  width: { label: "Width", unit: "m" },
  height: { label: "Height", unit: "m" },
  tank: { label: "Tank", unit: "L" },
  consumption: { label: "Consumption", unit: "L/100km" },
};