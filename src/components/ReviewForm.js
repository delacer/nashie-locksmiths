import React, { useState } from 'react';
import { FaStar, FaUser, FaCommentDots, FaCheckCircle } from 'react-icons/fa';

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
    <form className="review-form" onSubmit={handleSubmit} data-aos="fade-up">
      <h3>Share Your Experience</h3>
      <p className="form-subtext">Your feedback helps others trust Nashie Locksmiths.</p>

      <div className="form-group">
        <label htmlFor="name"><FaUser /> Name</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Thabo M."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="rating"><FaStar /> Rating</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>{r} Stars</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="comment"><FaCommentDots /> Review</label>
        <textarea
          id="comment"
          placeholder="Tell us what stood out..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>

      <label className="verified-checkbox">
        <input
          type="checkbox"
          checked={isVerified}
          onChange={(e) => setIsVerified(e.target.checked)}
        />
        <FaCheckCircle /> Verified Client
      </label>

      <button type="submit" className="submit-btn">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
