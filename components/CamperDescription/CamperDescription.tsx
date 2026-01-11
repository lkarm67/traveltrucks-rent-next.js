import { Camper } from "@/types/camper";
import React from "react";
import css from "./CamperDescription.module.css";
import CamperGallery from "../CamperGallery/CamperGallery";
import LocationBlock from "../LocationBlock/LocationBlock";

type CamperDescriptionProps = {
  camper: Camper;
};

const CamperDescription: React.FC<CamperDescriptionProps> = ({ camper }) => {
  return (
    <div className={css.camperDescription}>
      <div className={css.camperTitleBox}>
        <h2 className={css.camperSubtitleText}>{camper.name}</h2>

        <div className={css.detailsBox}>
          {/* Рейтинг */}
          <div className={css.reviewsBox}>
            <span className={css.starIcon}>
              <svg>
                <use href="/icons/sprite.svg#star-fill" />
              </svg>
            </span>

            <span className={css.ratingValue}>
              {camper.rating.rating.toFixed(1)}
            </span>

            <span className={css.reviewCount}>
              ({camper.rating.reviewsCount} Reviews)
            </span>
          </div>

          {/* Локація */}
          <LocationBlock location={camper.location} />

          {/* Ціна */}
          <p className={css.priceText}>
            €{camper.pricePerDay.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Галерея */}
      {camper.images && camper.images.length > 0 && (
        <CamperGallery images={camper.images} limit={4} />
      )}

      {/* Опис */}
      {camper.description && (
        <p className={css.textSupport}>{camper.description}</p>
      )}
    </div>
  );
};

export default CamperDescription;
