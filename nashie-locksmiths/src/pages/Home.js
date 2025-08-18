import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Testimonial from '../components/Testimonial';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import progImg from '../assets/prog.jpeg';
import cutImg from '../assets/cutt.jpeg';
import repImg from '../assets/rep.jpeg';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />

      <main className='home'>
        <section className='services-preview'>
          <h2>What We Offer</h2>
          <p className='services-tagline'>Smart. Fast. Reliable.</p>
          <div className='service-grid'>
            <ServiceCard
              title='Key Programming'
              image={progImg}
              description='Sync your key with your car’s system — fast and secure.'
            />
            <ServiceCard
              title='Key Cutting'
              image={cutImg}
              description='Precision-cut keys that fit perfectly and last longer.'
            />
            <ServiceCard
              title='Key Replacement'
              image={repImg}
              description='Lost or broken? We’ll replace it — no stress, no delay.'
            />
          </div>
        </section>

        <Testimonial />

        <section className='home-cta'>
          <h3>Need Help Right Now?</h3>
          <a href='/contact' className='cta-btn'>Book a Service</a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
