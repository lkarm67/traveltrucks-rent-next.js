import React from "react";
import css from "./LocationBlock.module.css";
import { VehicleLocation } from "@/types/camper";

type LocationBlockProps = {
  location?: VehicleLocation;
};

const LocationBlock: React.FC<LocationBlockProps> = ({ location }) => {
  return (
    <div className={css.locationBlock}>
      <svg className={css.mapIcon} aria-hidden="true">
        <use href="/images/sprite.svg#icon-map" />
      </svg>

      <span className={css.locationText}>
        {location?.city ?? "City not specified"},{" "}
        {location?.country ?? "Country not specified"}
      </span>
    </div>
  );
};

export default LocationBlock;
