import { Camper } from "@/lib/api";
import CamperDescription from "../CamperDescription/CamperDescription";
import FeaturesBlock from "../FeaturesBlock/FeaturesBlock";
import ReviewsBlock from "../ReviewsBlock/ReviewsBlock";
import BookingForm from "../BookingForm/BookingForm";
import React from "react";

type DetailsPageBlockProps = {
    camper: Camper;
};

const DetailsPageBlock: React.FC<DetailsPageBlockProps> = ({ camper }) => {
    return (
        <div className="detailsPageBlock">
            <CamperDescription camper={camper} />
            <nav className="detailsNavigationBar">
                <ul className="navigationList"></ul>
                    <li className="navigationItem">
                        <a href="#features" className="navigationLink">Features</a>
                    </li>
                    <li className="navigationItem"></li>
                        <a href="#reviews" className="navigationLink">Reviews</a>
                    </li>
                </ul>
            </nav>
            <div className="featuresBookingSection">
                <FeaturesBlock camper={camper} />
                <ReviewsBlock camper={camper} />
                <BookingForm camper={camper} />
            </div>
        </div>
    );
}

export default DetailsPageBlock;