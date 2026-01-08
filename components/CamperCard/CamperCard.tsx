import React from "react";
import Image from "next/image";
import Link from "next/link";
import css from './CamperCard.module.css';
import { VehicleEquipment, Camper } from "@/types/camper";
import LocationBlock from "../LocationBlock/LocationBlock";

type CamperCardProps = {
    camper: Camper;
};

type VehicleEquipmentProps = {
    vehicleEquipment: VehicleEquipment[];
};

const CamperCard: React.FC<CamperCardProps & VehicleEquipmentProps> = ({ camper, vehicleEquipment }) => {
    return (
        <div className={css.camperCard}>
            <div className={css.camperCardContent}>
                <Image
                    className={css.camperImage}
                    src={camper.imageUrl}
                    alt={camper.name}
                    width={292}
                    height={320}
                />
                
                <div className={css.camperInfoBox}>
                    <div className={css.camperTextContainer}>
                        <div className={css.camperTitleBox}>
                            <h2 className={css.camperTitle}>{camper.name}</h2>
                            <div className={css.camperPriceBox}>
                                <p className={css.pricePerDay}>{camper.pricePerDay}</p>
                                <svg className={css.heartIcon} xmlns="" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path d="M8 15s-7-4.5-7-9a5 5 0 0 1 10 0c0 4.5-7 9-7 9z"/>
                                </svg>
                            </div>            
                        </div>

                        <div className={css.detailsBox}>
                            <div className={css.reviewsBox}>
                                <span className={css.starIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.398.39-1.034.39-1.432 0l-1.1-1.1c-.398-.39-.398-1.034 0-1.424l8.5-8.5c.398-.39 1.034-.39 1.432 0l1.1 1.1c.398.39.398 1.034 0 1.424l-8.5 8.5z"/>
                                    </svg>
                                </span>
                                <span className={css.ratingValue}>{camper.rating}</span>
                                <span className={css.reviewCount}>(${camper.reviews} Reviews)</span>
                            </div>
                            
                            <LocationBlock location={camper.location} />
                        
                        </div>

                        <p className={css.textSupport}>{camper.supportingText}</p>
                        <ul className={css.badgesContainer}>
                            {vehicleEquipment.map((vehicleEquipment) => (
                                <li key={vehicleEquipment.id}>
                                    <svg>{vehicleEquipment.icon}</svg>
                                    <span className={css.vehicleEquipmentName}>{vehicleEquipment.name}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <Link
                            href={`/campers/${camper.id}`}
                            className={css.showMoreBtn}>
                            Show more
                        </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CamperCard;
