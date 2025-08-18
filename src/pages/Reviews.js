import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import '../styles/Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    const stored = localStorage.getItem('nashie-reviews');
    if (stored) setReviews(JSON.parse(stored));
  }, []);

  const addReview = (review) => {
    const updated = [review, ...reviews];
    setReviews(updated);
    localStorage.setItem('nashie-reviews', JSON.stringify(updated));
  };

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Nashie Locksmiths Reviews | Trusted Car Key Experts</title>
          <meta name="description" content="Read what our clients say about Nashie Locksmiths. Trusted car key replacement and locksmith services in Western Cape." />
          <meta name="keywords" content="locksmith reviews, Nashie Locksmiths feedback, car key service testimonials, Western Cape locksmith" />
        </Helmet>

        <Header />

        <main className="reviews-page">
          <section data-aos="fade-down">
            <h2>Client Reviews</h2>
            <p>Real feedback from real clients. See why Nashie Locksmiths is trusted across Western Cape.</p>
          </section>

          <ReviewForm onAddReview={addReview} />

          <div className="review-filter" data-aos="fade-up">
            <label htmlFor="rating-filter">Filter by Rating:</label>
            <select
              id="rating-filter"
              value={filter}
              onChange={(e) => setFilter(Number(e.target.value))}
            >
              <option value={0}>All Ratings</option>
              <option value={4}>4 Stars & Up</option>
              <option value={5}>5 Stars Only</option>
            </select>
          </div>

          <ReviewList reviews={reviews} filter={filter} />
        </main>

        <Footer />
      </>
    </HelmetProvider>
  );
};

export default Reviews;
