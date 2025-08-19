import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ServiceDetail.css';
import cutImg from '../assets/cutt.jpeg';
import { FaKey, FaTruckPickup, FaBolt, FaCheckCircle, FaStar, FaShieldAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

const Cutting = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Key Cutting | Nashie Locksmiths</title>
        <meta name="description" content="Fast, precise key cutting for cars, trucks, and motorcycles. Mobile service available across Western Cape." />
        <meta name="keywords" content="key cutting, car key duplication, mobile locksmith, Nashie Locksmiths, Western Cape" />
      </Helmet>

      <Header />
      <main className="service-detail">
        {/* Hero Section */}
        <section className="service-hero" data-aos="fade-up">
          <div className="hero-image-wrapper">
            <img src={cutImg} alt="Key Cutting Service" className="hero-image" />
            <div className="hero-overlay">
              <div className="hero-text">
                <h2>Key Cutting</h2>
                <p>Precision-cut keys that fit perfectly and last. Whether it’s a spare or a replacement, we’ve got you covered.</p>
                <div className="trust-badges">
                  <span><FaShieldAlt /> Certified Locksmiths</span>
                  <span><FaStar /> 5-Star Rated Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="service-info" data-aos="fade-up">
          <h3><FaKey /> What We Do</h3>
          <ul className="service-list">
            <li><FaCheckCircle /> Cut keys for cars, trucks, and motorcycles</li>
            <li><FaCheckCircle /> Duplicate keys with exact accuracy</li>
            <li><FaCheckCircle /> Laser and high-security key cutting</li>
            <li><FaTruckPickup /> On-site service or mobile delivery</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="service-benefits" data-aos="fade-up">
          <h3><FaBolt /> Why Choose Us?</h3>
          <p>We use professional-grade cutting machines to ensure every key is a perfect match. Fast turnaround, guaranteed fit, and no guesswork. Trusted by hundreds across Western Cape.</p>
        </section>

        {/* Testimonial Preview */}
        <section className="testimonial-preview" data-aos="fade-up">
          <blockquote>
            “Got my key cut in under 15 minutes. No hassle, just precision. Highly recommend Nashie Locksmiths!”
          </blockquote>
          <p className="review-author">— Sipho M., Cape Town</p>
        </section>

        {/* CTA */}
        <section className="service-cta" data-aos="zoom-in">
          <h3>Need a Key Cut Today?</h3>
          <a href="/contact#contact-form" className="cta-btn">
            <FaBolt style={{ marginRight: '8px' }} />
            Book Now
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Cutting;
