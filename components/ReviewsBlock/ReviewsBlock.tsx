import { Camper } from "@/lib/api";

const ReviewsBlock: React.FC<{ camper: Camper }> = ({ camper }) => {
    return (
        <div className="reviewsBlock">
            <h2>Reviews</h2>
            <ul>
                {camper.reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReviewsBlock;
