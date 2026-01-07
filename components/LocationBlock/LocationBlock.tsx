import { Camper } from "@/lib/api";

type LocationBlockProps = {
    camper: Camper;
};

const LocationBlock: React.FC<LocationBlockProps> = ({ camper }) => {
    return (
        <div className="sidebarLocationBlock">
            <p className="textSupport">Location</p>
            <input className="locationInput" type="text" value={`${<span><svg className="mapIcon"></svg></span> {camper.location}}`} readOnly />
        </div>
    );
};

export default LocationBlock;
