import { Camper } from "@/lib/api/api";

type CamperDescriptionProps = {
    camper: Camper;
};

const CamperDescription: React.FC<CamperDescriptionProps> = ({ camper }) => {
    return (
        <div className="camperDescription">
            <div className="camperTitleBox">
                <h2 className="camperSubtitleText">{camper.name}</h2>
                <div className="detailsBox">
                    <div className="reviewsBox">
                        <span className="starIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.398.39-1.034.39-1.432 0l-1.1-1.1c-.398-.39-.398-1.034 0-1.424l8.5-8.5c.398-.39 1.034-.39 1.432 0l1.1 1.1c.398.39.398 1.034 0 1.424l-8.5 8.5z"/>
                            </svg>
                        </span>
                        <span className="ratingValue">{camper.rating}</span>
                        <span className="reviewCount">{`(${camper.reviews} Reviews)`}</span>
                    </div>
                    <div className="locationBox">
                        <span className="locationMapIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
                                <path d="M2 2.5A1.5 1.5 0 0 1 3.5 1h9A1.5 1.5 0 0 1 14 2.5V14a1.5 1.5 0 0 1-1.5 1.5H3.5A1.5 1.5 0 0 1 2 14V2.5z"/>
                            </svg>
                        </span>
                        <p className="locationValue">{camper.location}</p>
                    </div>
                </div>
                <p className="priceText">{camper.pricePerDay}</p>
            </div>
            <div className="camperImagesContainer">
                <img className="camperImages" src={camper.imageUrl} alt={camper.name} />
            </div>
            <p className="textSupport">{camper.supportingText}</p>
        </div>
    );
};

export default CamperDescription;