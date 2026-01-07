import { Camper } from "@/lib/api";

type CamperCardProps = {
    camper: Camper;
};

const CamperCard: React.FC<CamperCardProps> = ({ camper }) => {
    return (
        <div className="catalogPageBlock">
            <div className="catalogSidebar">
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
            </div>   
            <div className="camperGallery">
                <ul className="camperList">
                    <li className="camperCard">
                        <div className="camperCardContent">
                            <img src={camper.imageUrl} alt={camper.name} />
                            <div className="camperInfoBox">
                                <div className="camperTextContainer">
                                    <div className="camperTitleBox">        
                                        <h2 className="camperSubtitleText">{camper.name}</h2>
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
                                            <p className="locationValue">{camper.location}</p>
                                        </div>
                                    </div>

                                    <p className="textSupport">{camper.supportingText}</p>
                                    <ul className="badgesContainer">
                                        <li className="badgeItem">
                                            <svg>{badge.icon}</svg>
                                            {camper.badges.map((badge, index) => (
                                                <span key={index} className="badge">{badge}</span>
                                            ))}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            
                <button className="showMoreBtn">Show more</button>
                            
            </div>
        </div>
    );
};

export default CamperItem;
