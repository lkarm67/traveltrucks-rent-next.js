import { Camper } from "@/lib/api";
import LocationBlock from "../LocationBlock/LocationBlock";
import FilterBlock from "../FilterBlock/FilterBlock";
import SidebarBlock from "../SidebarBlock/SidebarBlock";
import CamperCard from "../CamperCard/CamperCard";

type CatalogPageBlockProps = {
    camper: Camper;
};

const CatalogPageBlock: React.FC<CatalogPageBlockProps> = ({ camper }) => {
    return (
        <div className="catalogPageBlock">
            <SidebarBlock camper={camper} />
            <LocationBlock camper={camper} />
            <FilterBlock camper={camper} />
            <div className="camperGallery">
                <ul className="camperList">
                    <li className="camperCard">
                        <CamperCard camper={camper} />
                    </li>
                </ul>

                <button className="showMoreBtn">Show more</button>

            </div>
        </div>
    );
};

export default CatalogPageBlock;
