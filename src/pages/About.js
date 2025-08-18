import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.css';
import bannerImg from '../assets/banner.jpeg';
import { FaKey, FaTools, FaCarSide, FaShieldAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Header />
      <main className='about-page'>
        <section className='about-intro' data-aos='fade-up'>
          <h2>About Nashie Locksmiths</h2>
          <p className='about-tagline'>Precision. Speed. Trust.</p>
          <img src={bannerImg} alt='Company Banner' className='about-banner' />
        </section>

        <section className='about-values' data-aos='fade-up'>
          <h3>Why Choose Us</h3>
          <ul className='about-features'>
            <li><FaKey /> Smart Car Key Programming</li>
            <li><FaTools /> Precision Key Cutting</li>
            <li><FaCarSide /> Fast Key Replacement</li>
            <li><FaShieldAlt /> Trusted & Certified Technicians</li>
          </ul>
        </section>

        <section className='about-story' data-aos='fade-up'>
          <h3>Our Mission</h3>
          <p>
            We help drivers get back on the road with confidence. Whether you're locked out, need a spare, or lost your keys — Nashie Locksmiths delivers fast, reliable, and professional car key solutions across Western Cape.
          </p>
          <p>
            Our team blends cutting-edge tech with hands-on expertise to ensure every key fits, every service delights, and every customer feels secure.
          </p>
        </section>
        <section className='about-cta' data-aos='fade-up'>
          <h3>Ready to Get Started?</h3>
          <a href='/contact' className='cta-btn'>Book Now</a>
       </section>

      </main>
      <Footer />
    </>
  );
};

export default About;
