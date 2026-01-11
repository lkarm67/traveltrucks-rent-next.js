"use client";

import Image from "next/image";
import Link from "next/link";
import css from "./CamperCard.module.css";
import { Camper } from "@/types/camper";
import LocationBlock from "../LocationBlock/LocationBlock";
import { useFavoritesStore } from "@/lib/store/useFavoritesStore";

type CamperCardProps = {
  camper: Camper;
};

const CamperCard: React.FC<CamperCardProps> = ({ camper }) => {
  const imageSrc = camper.images?.[0] ?? "/images/placeholder.jpg";
  const { toggleFavorite, isFavorite } = useFavoritesStore();

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
              <svg className={isFavorite(camper.id) ? css.heartActive : css.heartIcon}>
                <use href="#icon-heart" />
              </svg>
            </button>
          </div>
        </div>

        <div className={css.detailsBox}>
          <div className={css.reviewsBox}>
            <svg className={css.starIcon}>
              <use href="#icon-star" />
            </svg>

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
