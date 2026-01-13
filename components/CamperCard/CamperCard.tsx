"use client";

import Image from "next/image";
import Link from "next/link";
import css from "./CamperCard.module.css";
import { Camper } from "@/types/camper";
import LocationBlock from "../LocationBlock/LocationBlock";
import { useAppStore } from "@/lib/store/appStore";
import Icon from "../Icon/Icon";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import { VehicleEquipment, VehicleEquipmentKey } from "@/types/camper";

type CamperCardProps = {
  camper: Camper;
};

const CamperCard: React.FC<CamperCardProps> = ({ camper }) => {
  const imageSrc = camper.images?.[0] ?? "/images/placeholder.jpg";
  const { toggleFavorite, isFavorite } = useAppStore();

  return (
    <div className={css.camperCard}>
      <Image
        className={css.camperImage}
        src={imageSrc}
        alt={camper.name}
        width={292}
        height={320}
      />

      <div className={css.camperInfoBox}>
        <div className={css.camperTitleBox}>
          <h2 className={css.camperTitle}>{camper.name}</h2>

          <div className={css.camperPriceBox}>
            <p className={css.pricePerDay}>
              €{camper.pricePerDay.toFixed(2)}
            </p>

            <button
              type="button"
              onClick={() => toggleFavorite(camper.id)}
              className={css.favoriteBtn}
              aria-label="Add to favorites"
            >
              {/* іконка серця зі спрайта */}
              <Icon name={isFavorite(camper.id) ? "icon-red-heart" : "icon-blackheart"} />
            </button>
          </div>
        </div>

        <div className={css.detailsBox}>
          <div className={css.reviewsBox}>
            <Icon name="icon-yellow-star" className={css.starIcon} />

            <span className={css.ratingValue}>
              {camper.rating.rating}
            </span>

            <span className={css.reviewCount}>
              ({camper.rating.reviewsCount} Reviews)
            </span>
          </div>

          <LocationBlock location={camper.location} />
        </div>

        {camper.description && (
          <p className={css.description}>{camper.description}</p>
        )}

        {camper.equipment && (
            <CamperFeatures equipment={camper.equipment as VehicleEquipmentKey[]} />
        )}

        <Link
          href={`/campers/${camper.id}`}
          className={css.showMoreBtn}
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
