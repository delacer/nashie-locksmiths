import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview = {
      name,
      rating,
      comment,
      verified: isVerified,
      date: new Date().toISOString()
    };

    onAddReview(newReview);
    setName('');
    setRating(5);
    setComment('');
    setIsVerified(false);
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>{r} Stars</option>
        ))}
      </select>
      <textarea
        placeholder="Your experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <label className="verified-checkbox">
        <input
          type="checkbox"
          checked={isVerified}
          onChange={(e) => setIsVerified(e.target.checked)}
        />
        Verified Client
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
