import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://sheetdb.io/api/v1/i7c0yknz2m4zb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: formData })
      }); 

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Try again later.');
    }
  };

  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-input" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="form-input" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            className="form-textarea" 
            required 
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="form-button">Send Message</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
