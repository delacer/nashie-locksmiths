import React, { useState } from 'react';
import '../styles/ContactForm.css';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const ContactForm = () => {
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
        headers: {
          'Content-Type': 'application/json'
        },
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
    <form className='contact-form' onSubmit={handleSubmit} aria-label='Contact form'>
      <h2>Send Us a Message</h2>
      <p className='form-subtext'>We’ll respond promptly via email</p>

      <div className='form-group'>
        <label htmlFor='fname'><FaUser /> First Name</label>
        <input
          type='text'
          id='fname'
          name='fname'
          value={formData.fname}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='lname'><FaUser /> Last Name</label>
        <input
          type='text'
          id='lname'
          name='lname'
          value={formData.lname}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='email'><FaEnvelope /> Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='message'><FaCommentDots /> Message</label>
        <textarea
          id='message'
          name='message'
          rows='4'
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {error && <p className='error-msg'>{error}</p>}
      {submitted && <p className='success-msg'>✅ Message sent! We'll be in touch soon.</p>}

      <div className='form-actions'>
        <button type='submit' className='submit-btn'>Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
