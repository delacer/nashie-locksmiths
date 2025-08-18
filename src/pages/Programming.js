import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ServiceDetail.css';
import progImg from '../assets/prog.jpeg';

const Programming = () => {
  return (
    <>
      <Header />
      <main className="service-detail">
        <section className="service-hero">
          <img src={progImg} alt="Key Programming" />
          <div className="hero-text">
            <h2>Key Programming</h2>
            <p>Smart keys, synced fast. Get back on the road with precision programming for modern vehicles.</p>
          </div>
        </section>

        <section className="service-info">
          <h3>What We Do</h3>
          <ul>
            <li>✅ Program transponder keys and remotes</li>
            <li>✅ Sync keys with immobilizer systems</li>
            <li>✅ Support for most car brands and models</li>
            <li>✅ Mobile service at your location</li>
          </ul>
        </section>

        <section className="service-benefits">
          <h3>Why Choose Us?</h3>
          <p>We use advanced diagnostic tools to ensure your key communicates securely with your vehicle. No towing, no delays — just fast, trusted service.</p>
        </section>

        <section className="service-cta">
          <h3>Ready to Program Your Key?</h3>
          <a href="/contact#contact-form" className="cta-btn">Book Now</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Programming;
