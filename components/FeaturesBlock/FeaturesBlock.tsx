import { Camper, vehicleDetailsMeta} from "@/types/camper";
import React from "react";
import { cardFeatureIcons } from "@/constants/cardFeatureIcons";

type FeaturesBlockProps = {
  camper: Camper;
};

export default function FeaturesBlock({ camper }: FeaturesBlockProps) {
  return (
    <section id="features">
      <div className="vehicleEquipmentBox">
        <ul className="vehicleEquipmentList">
          {Object.entries(camper.equipment).map(([key, value]) => {
            // Якщо обладнання відсутнє — пропускаємо
            if (!value) return null;

            // Використовуємо іконку з cardFeatureIcons
            const iconName = cardFeatureIcons[key as keyof typeof cardFeatureIcons];
            if (!iconName) return null;

            return (
              <li key={key} className="equipmentItem">
                <svg className="equipmentIcon">
                  <use href={`/icons/sprite.svg#${iconName}`} />
                </svg>
                <span>{key}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="vehicleDetailsBox">
        <h3>Vehicle Details</h3>
        <ul>
          {Object.entries(camper.details).map(([key, value]) => {
            if (value === undefined) return null;
            const meta = vehicleDetailsMeta[key as keyof typeof vehicleDetailsMeta];
            return (
              <li key={key}>
                <strong>{meta.label}:</strong> {value} {meta.unit || ""}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
