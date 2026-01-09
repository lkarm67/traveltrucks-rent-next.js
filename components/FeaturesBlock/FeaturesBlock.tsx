import { Camper } from "@/lib/api/api";
import React from "react";

const FeaturesBlock: React.FC<{ camper: Camper }> = ({ camper }) => {
    return (
        <div className="featuresBlock">
            <ul className="featuresList">
                {camper.features.map((feature) => (
                    <li key={feature.id}>{feature.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default FeaturesBlock;
