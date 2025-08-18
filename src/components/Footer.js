import React, { useState } from 'react';
import '../styles/Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mrblvloz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setError('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    }
  };

  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-brand'>
          <h3>Nashie Locksmiths</h3>
          <p>Fast, trusted car key solutions in Western Cape.</p>
        </div>

        <div className='footer-contact'>
          <p><FaMapMarkerAlt /> 4 Jamie Way Street, Mandalay</p>
          <p><FaEnvelope /> ruzvidzonashon291@gmail.com</p>
          <p><FaPhoneAlt /> +2760 497 1899</p>
        </div>

        <div className='footer-links'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>

        <div className='footer-newsletter'>
          <p>Subscribe for updates</p>
          <form onSubmit={handleNewsletterSubmit}>
            <div className='newsletter-input'>
              <input
                type='email'
                name='email'
                placeholder='Your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type='submit'>Subscribe</button>
          </form>
          {error && <p className='error-msg'>{error}</p>}
          {submitted && <p className='success-msg'>✅ Thanks for subscribing!</p>}
        </div>
      </div>

      <div className='footer-social'>
        <a href='https://www.facebook.com/profile.php?id=61573435090816' target='_blank' rel='noreferrer' title='Facebook'>
          <FaFacebookF />
        </a>
        <a href='https://www.instagram.com/nashielocksmiths/' target='_blank' rel='noreferrer' title='Instagram'>
          <FaInstagram />
        </a>
        <a href='https://wa.me/27604971899' target='_blank' rel='noreferrer' title='WhatsApp'>
          <FaWhatsapp />
        </a>
        <a href='mailto:ruzvidzonashon291@gmail.com' title='Email'>
          <FaEnvelope />
        </a>
      </div>

      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Nashie Locksmiths. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
