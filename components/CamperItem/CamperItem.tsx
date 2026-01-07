import { Camper } from "@/lib/api";

type CamperItemProps = {
    camper: Camper;
};

const CamperItem: React.FC<CamperItemProps> = ({ camper }) => {
    return (
        <div className="camperCard">
          <div className="camperCardContent">
            <img src={camper.imageUrl} alt={camper.name} />
            <div className="camperInfoBox">
              <div className="camperTextContainer">
                <div className="camperTitleBox">        
                  <h2>{camper.name}</h2>
                  <div className="camperPriceBox">
                    <p>Price per day: ${camper.pricePerDay}</p>
                    <svg className="heartIcon" xmlns="" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path d="M8 15s-7-4.5-7-9a5 5 0 0 1 10 0c0 4.5-7 9-7 9z"/>
                    </svg>
                  </div>            
                </div>
                <div className="detailsBox">
                    <div className="reviewsBox">
                        <span className="starIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.398.39-1.034.39-1.432 0l-1.1-1.1c-.398-.39-.398-1.034 0-1.424l8.5-8.5c.398-.39 1.034-.39 1.432 0l1.1 1.1c.398.39.398 1.034 0 1.424l-8.5 8.5z"/>
                            </svg>
                        </span>
                        <span className="ratingValue">{camper.rating}</span>
                        <span className="reviewCount">(${camper.reviews} Reviews)</span>
                    </div>
                    <div className="locationBox">
                        <span className="locationMapIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
                                <path d="M2 2.5A1.5 1.5 0 0 1 3.5 1h9A1.5 1.5 0 0 1 14 2.5V14a1.5 1.5 0 0 1-1.5 1.5H3.5A1.5 1.5 0 0 1 2 14V2.5z"/>
                            </svg>
                        </span>
                        <span className="locationValue">{camper.location}</span>
                    </div>
                </div>

                        <p className="TextSupport">{camper.supportingText}</p>

            </div>
            <p>{camper.description}</p>
            <p>Type: {camper.type}</p>
            
          </div>
        </div>
    );
};

export default CamperItem;
