import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import '../styles/Services.css';
import progImg from '../assets/prog.jpeg';
import cutImg from '../assets/cutt.jpeg';
import repImg from '../assets/rep.jpeg';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Nashie Locksmiths | Car Key Services</title>
          <meta name="description" content="Explore our car key services including programming, cutting, and replacement. Trusted mobile locksmiths in Western Cape." />
          <meta name="keywords" content="car key services, key programming, key cutting, key replacement, Nashie Locksmiths, Western Cape locksmith" />
        </Helmet>

        <Header />

        <main className='services-page'>
          <section className='services-intro' data-aos="fade-down">
            <h2>Car Key Services</h2>
            <p className='services-tagline'>Smart. Fast. Trusted.</p>
          </section>

          <div className='service-grid'>
            <div data-aos="fade-up">
              <ServiceCard
                title='Key Programming'
                image={progImg}
                description='Sync your key with your car — quick and secure.'
                link='/services/programming'
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <ServiceCard
                title='Key Cutting'
                image={cutImg}
                description='Precision-cut keys that fit and last.'
                link='/services/cutting'
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <ServiceCard
                title='Key Replacement'
                image={repImg}
                description='Lost or broken? We’ll replace it fast.'
                link='/services/replacement'
              />
            </div>
          </div>

          <section className='services-cta' data-aos="zoom-in">
            <h3>Need Help Right Now?</h3>
            <a href="/contact#contact-form" className="cta-btn">Book a Service</a>
          </section>
        </main>

        <Footer />
      </>
    </HelmetProvider>
  );
};

export default Services;
