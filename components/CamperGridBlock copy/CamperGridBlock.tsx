import { Camper } from "@/type/camper";
import LocationBlock from "../LocationBlock/LocationBlock";
import FilterBlock from "../FilterBlock/FilterBlock";
import SidebarBlock from "../SidebarBlock/SidebarBlock";
import CamperCard from "../CamperCard/CamperCard";

type CatalogPageBlockProps = {
    campers: Camper[];
};

const CatalogPageBlock: React.FC<CatalogPageBlockProps> = ({
    campers,
    onLoadMore,
    isLastPage
}) => {
    return (
        <div className="catalogPageBlock">
            <SidebarBlock />
            <LocationBlock />
            <FilterBlock />
            
            <ul className="camperList">
                {campers.map((camper) => (
                    <li key={camper.id}>
                        <CamperCard camper={camper} />
                    </li>
                ))}
            </ul>

            {!isLastPage && (
               <button onClick={onLoadMore}>Show more</button>
            )}

        </div>
    );
};

export default CatalogPageBlock;
