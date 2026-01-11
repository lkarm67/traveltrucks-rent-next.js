import { Camper } from "@/types/camper";
import React from "react";
import { vehicleDetailsMeta } from "@/constants/vehicleDetailsMeta";

type FeaturesBlockProps = {
  camper: Camper;
};

export default function FeaturesBlock({ camper }: FeaturesBlockProps) {
    return (
        <section id="features">
            <div className="vehicleEquipmentBox">
                <ul className="vehicleEquipmentList">
                    {Object.entries(camper.equipment).map(([key, value]) => {
                        if (!value) return null;
                        return (
                            <li key={key} className="equipmentItem">
                                <svg className="equipmentIcon">
                                    <use href={`/icons/sprite.svg#${EQUIPMENT_ICONS[key]}`} />
                                </svg>
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