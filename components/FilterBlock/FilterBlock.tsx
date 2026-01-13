import { Camper } from "@/types/camper";
import Icon from "@/components/Icon/Icon";
import {
  equipmentIcons,
  vehicleTypeIcons,
} from "@/constants/filterIcons";

type FilterBlockProps = {
  campers: Camper[];
};

const FilterBlock: React.FC<FilterBlockProps> = ({ campers }) => {
  const vehicleEquipment = Array.from(
    new Set(campers.flatMap(camper => camper.equipment ?? []))
  );

  const vehicleType = Array.from(
    new Set(campers.map(camper => camper.vehicleType).filter(Boolean))
  );

  return (
    <div className="catalogSidebar">
      <p className="cardText">Filter</p>

      {/* Vehicle equipment */}
      <div className="filterOptions">
        <h3 className="secondSubtitle">Vehicle equipment</h3>
        <div className="divider"></div>

        <div className="filteredCards">
          {vehicleEquipment.map(item => (
            <div key={String(item)} className="filterOption">
              {equipmentIcons[item as string] && (
                <Icon
                  name={equipmentIcons[item as string]}
                  className="filterIcon"
                />
              )}
              <span>{String(item)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle type */}
      <div className="filterOptions">
        <h3 className="secondSubtitle">Vehicle type</h3>
        <div className="divider"></div>

        <div className="filteredCards">
          {vehicleType.map(item => (
            <div key={item} className="filterOption">
              {vehicleTypeIcons[item] && (
                <Icon
                  name={vehicleTypeIcons[item]}
                  className="filterIcon"
                />
              )}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
