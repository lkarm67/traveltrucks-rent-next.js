import { Camper } from "@/types/camper";
import LocationBlock from "../LocationBlock/LocationBlock";
import FilterBlock from "../FilterBlock/FilterBlock";
import SidebarBlock from "../SidebarBlock/SidebarBlock";
import CamperCard from "../CamperCard/CamperCard";

type CampersGridBlockProps = {
  campers: Camper[];
  onLoadMore?: () => void;
  isLastPage?: boolean;
};

const CampersGridBlock: React.FC<CampersGridBlockProps> = ({
  campers = [],
  onLoadMore,
  isLastPage
}) => {
  return (
    <div className="campersGridBlock">
      <SidebarBlock />
      <LocationBlock />
      <FilterBlock campers={campers} />

      <ul className="campersList">
        {Array.isArray(campers) &&
          campers.map(camper => (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          ))}
      </ul>

      {!isLastPage && onLoadMore && (
        <button onClick={onLoadMore}>Show more</button>
      )}
    </div>
  );
};

export default CampersGridBlock;
