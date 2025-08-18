import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../styles/Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, email, message } = formData;

    if (!fname || !lname || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mrblvloz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${fname} ${lname}`,
          email,
          message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fname: '', lname: '', email: '', message: '' });
        setError('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    }
  };

  return (
    <HelmetProvider>
    <>
       <Helmet>
          <title>Contact Nashie Locksmiths | Book a Car Key Service</title>
          <meta name="description" content="Need help with your car key? Contact Nashie Locksmiths for fast, mobile service across Western Cape." />
          <meta name="keywords" content="contact locksmith, book car key service, Nashie Locksmiths, mobile locksmith, Western Cape" />
        </Helmet>
      <Header />
      <main className='contact-page'>
        {/* Contact Info */}
        <section className='contact-info' data-aos='fade-up'>
          <h2>Get in Touch</h2>
          <p className='contact-tagline'>Fast, reliable car key solutions — just a message away</p>
          <address>
            <p><FaMapMarkerAlt className='contact-icon' /> 4 Jamie Way Street, Mandalay, Capetown</p>
            <p><FaEnvelope className='contact-icon' /> ruzvidzonashon291@gmail.com</p>
            <p><FaPhoneAlt className='contact-icon' /> +2760 497 1899</p>
            <p>
              <a href='https://wa.me/27604971899' target='_blank' rel='noreferrer' className='whatsapp-link'>
                <FaWhatsapp className='contact-icon' /> Chat on WhatsApp
              </a>
            </p>
          </address>
        </section>

        {/* Map */}
        <section className='contact-map' data-aos='fade-up'>
          <h3>Visit Us</h3>
          <iframe
            title='Nashie Locksmiths Location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.123456789!2d18.600000!3d-34.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b123456789%3A0xabcdef123456789!2s4%20Jamie%20Way%20Street%2C%20Mandalay%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1690000000000'
            width='100%'
            height='300'
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </section>

        <section className='contact-form' id='contact-form' data-aos='fade-up'>
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit} autoComplete='on' aria-label='Contact form'>
            <label htmlFor='fname'>First Name</label>
            <input
              id='fname'
              name='fname'
              type='text'
              value={formData.fname}
              onChange={handleChange}
              required
            />

            <label htmlFor='lname'>Last Name</label>
            <input
              id='lname'
              name='lname'
              type='text'
              value={formData.lname}
              onChange={handleChange}
              required
            />

            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              required
            />

            {error && <p className='error-msg'>{error}</p>}
            {submitted && (
              <p className='success-msg'>
                ✅ Thank you for reaching out! We'll get back to you shortly.
              </p>
            )}

            <button type='submit' className='submit-btn'>Submit</button>
          </form>
        </section>

        <section className='contact-cta' data-aos='fade-up'>
          <h3>Need Help Right Now?</h3>
          <a href='tel:+27604971899' className='cta-btn'>Call Us</a>
        </section>
      </main>
      <Footer />
    </>
    </HelmetProvider>
  );
};

export default Contact;
