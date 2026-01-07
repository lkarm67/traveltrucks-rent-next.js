import { Camper } from "@/lib/api";

type SidebarBlockProps = {
    camper: Camper;
};

const SidebarBlock: React.FC<SidebarBlockProps> = ({ camper }) => {

    return (
        <div className="sidebarContent">
            <div className="sidebarLocationBlock">
                <p className="textSupport">Location</p>
                <input className="locationInput" type="text" value={`${<span><svg className="mapIcon"></svg></span> {camper.location}}`} readOnly />
            </div>
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
            <button className="searchBtn">Search</button>
        </div>
    );
}
export default SidebarBlock;