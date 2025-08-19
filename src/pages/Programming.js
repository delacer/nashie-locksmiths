import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ServiceDetail.css';
import progImg from '../assets/prog.jpeg';
import { FaMicrochip, FaCarSide, FaBolt, FaCheckCircle, FaStar, FaShieldAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

const Programming = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Key Programming | Nashie Locksmiths</title>
        <meta name="description" content="Smart key programming for modern vehicles. Fast, secure, and mobile service across Western Cape." />
        <meta name="keywords" content="key programming, transponder key, immobilizer sync, mobile locksmith, Nashie Locksmiths, Western Cape" />
      </Helmet>

      <Header />
      <main className="service-detail">
        {/* Hero Section */}
        <section className="service-hero" data-aos="fade-up">
          <div className="hero-image-wrapper">
            <img src={progImg} alt="Key Programming Service" className="hero-image" />
            <div className="hero-overlay">
              <div className="hero-text">
                <h2>Key Programming</h2>
                <p>Smart keys, synced fast. Get back on the road with precision programming for modern vehicles.</p>
                <div className="trust-badges">
                  <span><FaShieldAlt /> Certified Technicians</span>
                  <span><FaStar /> 5-Star Rated Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="service-info" data-aos="fade-up">
          <h3><FaMicrochip /> What We Do</h3>
          <ul className="service-list">
            <li><FaCheckCircle /> Program transponder keys and remotes</li>
            <li><FaCheckCircle /> Sync keys with immobilizer systems</li>
            <li><FaCheckCircle /> Support for most car brands and models</li>
            <li><FaCarSide /> Mobile service at your location</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="service-benefits" data-aos="fade-up">
          <h3><FaBolt /> Why Choose Us?</h3>
          <p>We use advanced diagnostic tools to ensure your key communicates securely with your vehicle. No towing, no delays — just fast, trusted service. Our technicians are trained on the latest systems, ensuring compatibility and reliability across brands.</p>
        </section>

        {/* Testimonial Preview */}
        <section className="testimonial-preview" data-aos="fade-up">
          <blockquote>
            “Nashie Locksmiths programmed my smart key in minutes. No dealership delays, no stress. Highly recommended!”
          </blockquote>
          <p className="review-author">— Thando K., Bellville</p>
        </section>

        {/* CTA */}
        <section className="service-cta" data-aos="zoom-in">
          <h3>Ready to Program Your Key?</h3>
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

export default Programming;
