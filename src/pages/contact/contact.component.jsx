import React, { useState } from 'react';
import './contact.styles.css';

const Contact = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formFields);
    alert("Thanks for contacting us! We'll get back to you shortly.");
    // Reset form
    setFormFields({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have questions about our products? We're here to help.</p>
      </div>

      <div className="contact-content">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Fill up the form and our team will get back to you within 24 hours.</p>
          
          <div className="info-item">
            <span className="icon">📍</span>
            <span>123 Market Street, New Delhi, India</span>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <span>support@vishalmegamart.com</span>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formFields.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formFields.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formFields.message}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;