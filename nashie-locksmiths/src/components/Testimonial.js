import React, { useEffect } from 'react';
import '../styles/Testimonial.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import avatar1 from '../assets/banner.jpeg';
import avatar2 from '../assets/banner.jpeg';
import avatar3 from '../assets/banner.jpeg';

const testimonials = [
  {
    name: 'Edward White',
    text: 'Nashie Locksmiths came to my rescue when I lost my car keys. Their speedy service and professionalism were truly impressive.',
    rating: 5,
    avatar: avatar1
  },
  {
    name: 'Talisha Mudzingwa',
    text: 'I had a great experience when I needed a spare key. The team was friendly and the key cutting was quick and precise.',
    rating: 5,
    avatar: avatar2
  },
  {
    name: 'Audrey Williams',
    text: 'After locking my keys in the car, Nashie Locksmiths arrived promptly and opened the door without damage. Outstanding service!',
    rating: 5,
    avatar: avatar3
  }
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className='testimonials' aria-label='Customer testimonials'>
      <h2 data-aos='fade-up'>What Our Clients Say</h2>
      <p className='testimonial-subtext' data-aos='fade-up'>Real stories from satisfied customers</p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className='testimonial-carousel'
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className='testimonial-card' data-aos='zoom-in'>
              <img src={t.avatar} alt={`${t.name} avatar`} className='testimonial-avatar' />
              <FaQuoteLeft className='quote-icon' />
              <p className='testimonial-text'>{t.text}</p>
              <div className='testimonial-footer'>
                <div className='verified-badge'>Verified Customer</div>
                <h3>{t.name}</h3>
                <div className='stars'>
                  {[...Array(t.rating)].map((_, idx) => (
                    <FaStar key={idx} className='star' />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
