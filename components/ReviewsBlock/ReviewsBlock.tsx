import { Camper, getRatingFromReviews } from "@/types/camper";
import React from "react";

type ReviewsBlockProps = {
  camper: Camper;
};

export default function ReviewsBlock({ camper }: ReviewsBlockProps) {
  const { rating, reviewsCount } = getRatingFromReviews(camper.reviews);

  return (
    <section id="reviews">
      <h3>Reviews</h3>

      <ul className="reviewsList">
        {camper.reviews?.length ? (
          camper.reviews.map((review) => (
            <li key={review.id} className="reviewItem">
              {/* Верхня частина: Avatar + ім'я + зірочки */}
              <div className="reviewHeader">
                <div className="avatar">
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </div>
                <div className="reviewerInfo">
                  <span className="reviewerName">{review.reviewer_name}</span>
                  <span className="reviewStars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i}>{i <= review.reviewer_rating ? "★" : "☆"}</span>
                    ))}
                  </span>
                </div>
              </div>

              {/* Нижня частина: коментар */}
              <div className="reviewContent">
                <p>{review.comment}</p>
              </div>
            </li>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </ul>

      
    </section>
  );
}
