import { Camper } from "@/lib/api";
import React from "react";

const FeaturesBlock: React.FC<{ camper: Camper }> = ({ camper }) => {
    return (
        <div className="featuresBlock">
            <ul className="featuresList">
                {camper.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
}

export default FeaturesBlock;
