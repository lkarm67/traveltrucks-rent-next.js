import { Camper } from "@/lib/api";

type FilterBlockProps = {
    camper: Camper;
};

const FilterBlock: React.FC<FilterBlockProps> = ({ camper }) => {
    return (
        <div className="catalogSidebar">
            <p className="cardText">Filter</p>
            <div className="filterOptions">
                <h3 className="secondSubtitle">Vehicle equipment</h3>
                <div className="divider"></div>
                <div className="filteredCards">
                    {camper.vehicleEquipment.map((item, index) => (
                        <div key={index} className="filterOption">
                            <svg>{/* SVG content for vehicle equipment */}</svg>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filterOptions">
                <h3 className="secondSubtitle">Vehicle type</h3>
                <div className="divider"></div>
                <div className="filteredCards">
                    {camper.vehicleType.map((item, index) => (
                        <div key={index} className="filterOption">
                            <svg>{/* SVG content for vehicle type */}</svg>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterBlock;
