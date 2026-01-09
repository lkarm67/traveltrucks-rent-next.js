import { LocationBlock } from "@/types/camper";
import React from "react";
import css from "./LocationBlock.module.css";

type LocationBlockProps = {
    locationBlock: LocationBlock;
};

const locationBlock: React.FC<LocationBlockProps> = ({ locationBlock }) => {
    return (
        <div className={css.sidebarLocationBlock}>
            <p className={css.textSupport}>Location</p>
            <input
                className={css.locationInput}
                type="text"
                value={
                    `${<span>
                    <svg className={css.mapIcon}></svg>
                    <LocationBlock locationBlock={locationBlock} />
                    </span>}`
                }
                placeholder="City"
                />
        </div>
    );
};

export default locationBlock;
