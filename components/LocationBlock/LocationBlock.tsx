import React from "react";
import css from "./LocationBlock.module.css";
import { VehicleLocation } from "@/types/camper";

type LocationBlockProps = {
  location: VehicleLocation;
};

const LocationBlock: React.FC<LocationBlockProps> = ({ location }) => {
  return (
    <div className={css.locationBlock}>
      <svg className={css.mapIcon}>
        <use href="#icon-map" />
      </svg>

      <span className={css.locationText}>
        {location.city}, {location.country}
      </span>
    </div>
  );
};

export default LocationBlock;
