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

    const hash = window.location.hash;
    if (hash === '#contact-form') {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    service: '',
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
    const { fname, lname, email, service, message } = formData;

    if (!fname || !lname || !email || !service || !message) {
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
          message: `Service: ${service}\n\n${message}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fname: '', lname: '', email: '', service: '', message: '' });
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
              <p><FaMapMarkerAlt className='contact-icon' /> 4 Jamie Way Street, Mandalay, Cape Town</p>
              <p><FaEnvelope className='contact-icon' /> ruzvidzonashon291@gmail.com</p>
              <p><FaPhoneAlt className='contact-icon' /> +2760 497 1899</p>
              <p>
                <a href='https://wa.me/27604971899' target='_blank' rel='noreferrer' className='whatsapp-link'>
                  <FaWhatsapp className='contact-icon' /> Chat on WhatsApp
                </a>
              </p>
            </address>
          </section>

          {/* Embedded Map */}
          <section className='contact-map' data-aos='fade-up'>
            <h3>Visit Us</h3>
            <iframe
              title='Nashie Locksmiths Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.123456789!2d18.600000!3d-34.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b123456789%3A0xabcdef123456789!2s4%20Jamie%20Way%20Street%2C%20Mandalay%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1690000000000'
              width='100%'
              height='300'
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </section>

          {/* Contact Form */}
          <section className='contact-form' data-aos='fade-up'>
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit} id='contact-form' autoComplete='on' aria-label='Contact form'>
              <div className='form-group'>
                <input
                  id='fname'
                  name='fname'
                  type='text'
                  value={formData.fname}
                  onChange={handleChange}
                  required
                  placeholder=' '
                />
                <label htmlFor='fname'>First Name</label>
              </div>

              <div className='form-group'>
                <input
                  id='lname'
                  name='lname'
                  type='text'
                  value={formData.lname}
                  onChange={handleChange}
                  required
                  placeholder=' '
                />
                <label htmlFor='lname'>Last Name</label>
              </div>

              <div className='form-group'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=' '
                />
                <label htmlFor='email'>Email</label>
              </div>

              <div className='form-group'>
                <select
                  id='service'
                  name='service'
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value='' disabled>Select Service Type</option>
                  <option value='Key Cutting'>Key Cutting</option>
                  <option value='Key Programming'>Key Programming</option>
                  <option value='Key Replacement'>Key Replacement</option>
                  <option value='Other'>Other</option>
                </select>
                <label htmlFor='service'>Service Type</label>
              </div>

              <div className='form-group'>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder=' '
                />
                <label htmlFor='message'>Your Message</label>
              </div>

              {error && <p className='error-msg'>{error}</p>}
              {submitted && (
                <p className='success-msg'>
                  ✅ Thank you for reaching out! We'll get back to you shortly.
                </p>
              )}

              <button type='submit' className='submit-btn'>Submit</button>
            </form>
          </section>

          {/* CTA */}
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
