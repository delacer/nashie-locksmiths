import React from 'react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import '../styles/Services.css';
import progImg from '../assets/prog.jpeg';
import cutImg from '../assets/cutt.jpeg';
import repImg from '../assets/rep.jpeg';

const Services = () => {
  return (
    <>
      <Header />
      <main className='services-page'>
        <section className='services-intro'>
          <h2>Car Key Services</h2>
          <p className='services-tagline'>Smart. Fast. Trusted.</p>
        </section>

        <div className='service-grid'>
          <ServiceCard
            title='Key Programming'
            image={progImg}
            description='Sync your key with your car — quick and secure.'
          />
          <ServiceCard
            title='Key Cutting'
            image={cutImg}
            description='Precision-cut keys that fit and last.'
          />
          <ServiceCard
            title='Key Replacement'
            image={repImg}
            description='Lost or broken? We’ll replace it fast.'
          />
        </div>

        <section className='services-cta'>
          <h3>Need Help Right Now?</h3>
          <a href='/contact' className='cta-btn'>Book a Service</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
