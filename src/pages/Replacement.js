import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ServiceDetail.css';
import repImg from '../assets/rep.jpeg';

const Replacement = () => {
  return (
    <>
      <Header />
      <main className="service-detail">
        <section className="service-hero">
          <img src={repImg} alt="Key Replacement" />
          <div className="hero-text">
            <h2>Key Replacement</h2>
            <p>Lost your key? Broken remote? We’ll replace it fast — no towing, no stress.</p>
          </div>
        </section>

        <section className="service-info">
          <h3>What We Do</h3>
          <ul>
            <li>✅ Replace lost or stolen car keys</li>
            <li>✅ Repair or replace broken remotes</li>
            <li>✅ Program new keys on-site</li>
            <li>✅ Emergency service available</li>
          </ul>
        </section>

        <section className="service-benefits">
          <h3>Why Choose Us?</h3>
          <p>We specialize in fast key replacement for all major car brands. Our mobile team comes to you — saving time, money, and hassle.</p>
        </section>

        <section className="service-cta">
          <h3>Need a Replacement Right Now?</h3>
          <a href="/contact#contact-form" className="cta-btn">Book Now</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Replacement;
