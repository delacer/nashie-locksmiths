import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ReviewList = ({ reviews, filter }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i === fullStars + 1 && hasHalf) {
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star empty" />);
      }
    }

    return stars;
  };

  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const filteredReviews = filter > 0
    ? sortedReviews.filter(r => r.rating >= filter)
    : sortedReviews;

  return (
    <section className="review-list">
      <h3>What Our Clients Say</h3>
      {filteredReviews.length === 0 ? (
        <p>No reviews yet. Be the first!</p>
      ) : (
        filteredReviews.map((review, index) => (
          <div key={index} className="review-card" data-aos="fade-up">
            <strong>{review.name}</strong>
            {review.verified && <span className="verified-badge">✔ Verified Client</span>}
            <div className="star-rating">{renderStars(review.rating)}</div>
            <p>{review.comment}</p>
            <small>{new Date(review.date).toLocaleDateString()}</small>
          </div>
        ))
      )}
    </section>
  );
};

export default ReviewList;
