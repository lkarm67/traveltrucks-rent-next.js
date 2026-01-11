"use client";

import { Camper } from "@/types/camper";
import CamperDescription from "../CamperDescription/CamperDescription";
import FeaturesReviewsTab from "../FeaturesReviewsTab/FeaturesReviewsTab";
import BookingForm from "../BookingForm/BookingForm";
import css from "./DetailsPageBlock.module.css";

type Props = {
  camper: Camper;
};

export default function DetailsPageBlock({ camper }: Props) {
  return (
    <div className={css.detailsPageBlock}>
      <CamperDescription camper={camper} />

      <div className={css.content}>
        <FeaturesReviewsTab camper={camper} />
        <BookingForm camper={camper} />
      </div>
    </div>
  );
}
