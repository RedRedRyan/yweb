'use client';

import { useState } from 'react';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        message: '',
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Column - Image */}
        <div className="contact-image-wrapper">
          <img
            src="/images/flower.png"
            alt="Contact section decoration"
            className="contact-image"
          />
        </div>

        {/* Right Column - Form */}
        <div className="contact-form-wrapper">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p className="contact-subtitle">Hit us up for gigs and collabs.</p>
          </div>

          <form onSubmit={handleSubmit} className="inquiry-form">
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            {/* First Name and Last Name */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={6}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-button"
              disabled={submitted}
            >
              {submitted ? 'Sent!' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="right-flower" />
    </section>
  );
}
