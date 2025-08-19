import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Banner.css';
import { FaCheckCircle, FaShieldAlt, FaStar } from 'react-icons/fa';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='banner' aria-label='Hero section for Nashie Locksmiths'>
      <div className='banner-overlay'>
        <div className='banner-content' data-aos='fade-up'>
          <h1>
            <span className='highlight'>Unlock Confidence</span><br />
            With Expert Car Key Solutions
          </h1>
          <p className='tagline'>
            Fast. Reliable. Professional. Serving Western Cape with precision car key programming, cutting, and replacement.
          </p>

          <ul className='features'>
            <li><FaCheckCircle /> Mobile Service Available</li>
            <li><FaCheckCircle /> All Major Car Brands Supported</li>
            <li><FaCheckCircle /> Emergency Key Replacement</li>
          </ul>

          <div className='trust-badges' data-aos='zoom-in'>
            <div><FaShieldAlt /> Certified Locksmiths</div>
            <div><FaStar /> 5-Star Rated Service</div>
          </div>

          <div className='cta-group'>
            <a href='/contact#contact-form' className='cta-btn primary'>Book a Service</a>
            <a href='/about' className='cta-btn secondary'>Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
