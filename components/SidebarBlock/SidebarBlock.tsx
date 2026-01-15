import React, { useState } from "react";
import css from "./SidebarBlock.module.css";
import { CatalogFilters, VehicleType } from "@/types/camper";

type EquipmentFilter = {
  [key: string]: boolean | "automatic" | "manual" | "petrol" | "diesel";
};

type SidebarBlockProps = {
  filters?: CatalogFilters;
  onSearch?: (filters: CatalogFilters) => void;
};

const equipmentOptions = [
  "AC",
  "Bathroom",
  "Kitchen",
  "TV",
  "Radio",
  "Refrigerator",
  "Microwave",
  "Gas",
  "Water",
];

const vehicleTypeOptions: VehicleType[] = ["alcove", "fullyIntegrated", "van"];

const SidebarBlock: React.FC<SidebarBlockProps> = ({ filters, onSearch }) => {
  const [location, setLocation] = useState(filters?.location || "");
  const [equipment, setEquipment] = useState<EquipmentFilter>(filters?.equipment || {});
  const [vehicleType, setVehicleType] = useState<VehicleType | "">(filters?.bodyType || "");

  const toggleEquipment = (key: string) => {
    setEquipment((prev) => ({
      ...prev,
      [key]: typeof prev[key] === "boolean" ? !prev[key] : true,
    }));
  };

  const applyFilters = () => {
    const newFilters: CatalogFilters = {
      location: location || undefined,
      bodyType: vehicleType || undefined,
      equipment,
    };
    if (onSearch) onSearch(newFilters);
  };

  return (
    <div className={css.sidebarContent}>
      {/* Location input */}
      <div className={css.sidebarLocationBlock}>
        <p className={css.textSupport}>Location</p>
        <div className={css.locationWrapper}>
          <svg className={css.mapIcon} width="18" height="20">
            <use href="/icons/sprite.svg#icon-map" />
          </svg>
          <input
            className={css.locationInput}
            type="text"
            value={location}
            placeholder="City"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      {/* Equipment */}
      <p className={css.cardText}>Filter</p>
      <div className={css.filterOptions}>
        <h3 className={css.secondSubtitle}>Vehicle equipment</h3>
        <div className={css.divider}></div>
        <div className={css.filteredCards}>
          {equipmentOptions.map((key) => {
            const active = equipment[key] === true;
            return (
              <div
                key={key}
                className={`${css.filterOption} ${active ? css.active : ""}`}
                onClick={() => toggleEquipment(key)}
              >
                <svg className={css.filterIcon}>
                  <use href={`/icons/sprite.svg#icon-${key.toLowerCase()}`} />
                </svg>
                <span className={css.filterKey}>{key}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vehicle type */}
      <div className={css.filterOptions}>
        <h3 className={css.secondSubtitle}>Vehicle type</h3>
        <div className={css.divider}></div>
        <div className={css.filteredCards}>
          {vehicleTypeOptions.map((type) => (
            <div
              key={type}
              className={`${css.filterOption} ${vehicleType === type ? css.active : ""}`}
              onClick={() => setVehicleType(type)}
            >
              <svg className={css.filterIcon}>
                <use href={`/icons/sprite.svg#icon-${type.toLowerCase()}`} />
              </svg>
              <span>{type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search button */}
      <button type="button" className={css.button} onClick={applyFilters}>
        Search
      </button>
    </div>
  );
};

export default SidebarBlock;
