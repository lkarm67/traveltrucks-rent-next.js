import Icon from "../Icon/Icon";
import css from "./CamperFeatures.module.css";
import { cardFeatureIcons } from "@/constants/cardFeatureIcons";
import { VehicleEquipmentKey } from "@/types/camper";

type CamperFeaturesProps = {
  equipment?: VehicleEquipmentKey[];
};

const CamperFeatures: React.FC<CamperFeaturesProps> = ({ equipment }) => {
  if (!equipment) return null;

  return (
    <ul className={css.featuresList}>
      {equipment
        .filter(item => cardFeatureIcons[item])
        .slice(0, 5)
        .map(item => (
          <li key={item.toString()} className={css.featureItem}>
            <Icon name={cardFeatureIcons[item]} />
            <span>{item}</span>
          </li>
        ))}
    </ul>
  );
};

export default CamperFeatures;
