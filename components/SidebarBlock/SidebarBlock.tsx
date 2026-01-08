import { Camper, VehicleEquipment, VehicleType } from "@/types/camper";
import React from "react";
import css from './SidebarBlock.module.css';

type SidebarBlockProps = {
    camper: Camper;
};

type VehicleEquipmentProps = {
    vehicleEquipment: VehicleEquipment[];
};

type VehicleTypeProps = {
    vehicleType: VehicleType[];
};

const SidebarBlock: React.FC<SidebarBlockProps & VehicleEquipmentProps & VehicleTypeProps> = ({ camper, vehicleEquipment, vehicleType }) => {

    return (
        <div className={css.sidebarContent}>
            <div className={css.sidebarLocationBlock}>
                <p className={css.textSupport}>Location</p>
                <input className={css.locationInput} type="text" value={`${<span><svg className={css.mapIcon}></svg></span> {camper.location}}`} readOnly />
            </div>
            <p className={css.cardText}>Filter</p>
            <div className={css.filterOptions}>
                <h3 className={css.secondSubtitle}>Vehicle equipment</h3>
                <div className={css.divider}></div>
                <ul className={css.filteredCards}>
                    {vehicleEquipment.map((vehicleEquipment) => (
                        <li key={vehicleEquipment.id} className={css.filterOption}>
                            <svg>{/* SVG content for vehicle equipment */}</svg>
                            <span>{vehicleEquipment.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={css.filterOptions}>
                <h3 className={css.secondSubtitle}>Vehicle type</h3>
                <div className={css.divider}></div>
                <ul className={css.filteredCards}>
                    {vehicleType.map((vehicleType) => (
                        <li key={vehicleType.id} className={css.filterOption}>
                            <svg>{/* SVG content for vehicle type */}</svg>
                            <span>{vehicleType.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <button
                type="button"
                className={css.searchBtn}>
                Search
            </button>
        </div>
    );
}
export default SidebarBlock;