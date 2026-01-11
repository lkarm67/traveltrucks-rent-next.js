import React from "react";
import css from "./CamperGallery.module.css";

type CamperGalleryProps = {
  images: string[];
  limit?: number; // скільки фото показувати
};

export default function CamperGallery({ images, limit = 4 }: CamperGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className={css.galleryContainer}>
      {images.slice(0, limit).map((img, index) => (
        <img
          key={index}
          className={css.galleryImage}
          src={img}
          alt={`Camper photo ${index + 1}`}
        />
      ))}
    </div>
  );
}
