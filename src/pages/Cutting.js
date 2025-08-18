import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ServiceDetail.css';
import cutImg from '../assets/cutt.jpeg';

const Cutting = () => {
  return (
    <>
      <Header />
      <main className="service-detail">
        <section className="service-hero">
          <img src={cutImg} alt="Key Cutting" />
          <div className="hero-text">
            <h2>Key Cutting</h2>
            <p>Precision-cut keys that fit perfectly and last. Whether it’s a spare or a replacement, we’ve got you covered.</p>
          </div>
        </section>

        <section className="service-info">
          <h3>What We Do</h3>
          <ul>
            <li>✅ Cut keys for cars, trucks, and motorcycles</li>
            <li>✅ Duplicate keys with exact accuracy</li>
            <li>✅ Laser and high-security key cutting</li>
            <li>✅ On-site service or mobile delivery</li>
          </ul>
        </section>

        <section className="service-benefits">
          <h3>Why Choose Us?</h3>
          <p>We use professional-grade cutting machines to ensure every key is a perfect match. Fast turnaround, guaranteed fit, and no guesswork.</p>
        </section>

        <section className="service-cta">
          <h3>Need a Key Cut Today?</h3>
          <a href="/contact#contact-form" className="cta-btn">Book Now</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Cutting;
