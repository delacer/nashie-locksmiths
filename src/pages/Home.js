import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import progImg from '../assets/prog.jpeg';
import cutImg from '../assets/cutt.jpeg';
import repImg from '../assets/rep.jpeg';

import '../styles/Home.css';

const Home = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Nashie Locksmiths | Car Key Experts in Western Cape</title>
          <meta name="description" content="Fast, trusted car key replacement and locksmith services. Mobile service across Western Cape." />
          <meta name="keywords" content="car key replacement, locksmith, Western Cape, Nashie Locksmiths, mobile locksmith, key cutting, key programming" />
        </Helmet>

        <Header />
        <Banner />
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
        <main className="home-page">
          <section className="reviews-preview">
            <Testimonial />
            <a href="/reviews" className="link-btn">View Reviews</a>
          </section>
        </main>

        <Footer />
      </>
    </HelmetProvider>
  );
};

export default Home;
