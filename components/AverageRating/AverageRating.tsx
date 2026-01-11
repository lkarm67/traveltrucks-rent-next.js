import { Camper, getRatingFromReviews } from "@/types/camper";
import React from "react";

type AverageRatingProps = {
  camper: Camper;
};

export default function AverageRating({ camper }: AverageRatingProps) {
  const { rating, reviewsCount } = getRatingFromReviews(camper.reviews);

  if (reviewsCount === 0) return null; // якщо немає відгуків, не показуємо

  return (
    <div className="averageRating">
      <svg className="starIcon">
        <use href="/icons/sprite.svg#star-fill" />
      </svg>
      <span className="ratingValue">{rating.toFixed(1)}</span>
      <span className="reviewsCount">({reviewsCount} Reviews)</span>
    </div>
  );
}
