import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ServiceDetail.css';
import repImg from '../assets/rep.jpeg';
import { FaKey, FaTools, FaBolt, FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Replacement = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Header />
      <main className="service-detail">
        {/* Hero Section */}
        <section className="service-hero" data-aos="fade-up">
          <div className="hero-image-wrapper">
            <img src={repImg} alt="Key Replacement Service" className="hero-image" />
            <div className="hero-overlay">
              <div className="hero-text">
                <h2>Key Replacement</h2>
                <p>Lost your key? Broken remote? We’ll replace it fast — no towing, no stress.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="service-info" data-aos="fade-up">
          <h3><FaKey /> What We Do</h3>
          <ul className="service-list">
            <li><FaCheckCircle /> Replace lost or stolen car keys</li>
            <li><FaCheckCircle /> Repair or replace broken remotes</li>
            <li><FaCheckCircle /> Program new keys on-site</li>
            <li><FaTools /> Emergency service available</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="service-benefits" data-aos="fade-up">
          <h3><FaBolt /> Why Choose Us?</h3>
          <p>We specialize in fast key replacement for all major car brands. Our mobile team comes to you — saving time, money, and hassle. Trusted by hundreds across Western Cape, we deliver peace of mind with every key.</p>
        </section>

        {/* CTA */}
        <section className="service-cta" data-aos="zoom-in">
          <h3>Need a Replacement Right Now?</h3>
          <a href="/contact#contact-form" className="cta-btn">Book Now</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Replacement;
