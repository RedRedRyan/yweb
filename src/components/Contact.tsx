'use client';

import gsap from 'gsap';
import { Flip } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
}

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLElement | null>(null);

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ email: '', firstName: '', lastName: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  useGSAP(
    () => {
      const products = gsap.utils.toArray<HTMLElement>('.product');
      if (!products.length) return;

      activeRef.current = products[0];

      // Store handlers mapped to each element so cleanup can remove the exact same reference
      const handlers = new Map<HTMLElement, () => void>();

      function changeGrid(el: HTMLElement) {
        const active = activeRef.current as HTMLElement;
        if (el === active) return;

        const state = Flip.getState(products);

        active.dataset.grid = el.dataset.grid;
        el.dataset.grid = 'img-1';
        activeRef.current = el;

        Flip.from(state, {
          duration: 0.3,
          absolute: true,
          ease: 'power1.inOut',
        });
      }

      products.forEach((el) => {
        const handler = () => changeGrid(el);
        handlers.set(el, handler);
        el.addEventListener('click', handler);
      });

      return () => {
        products.forEach((el) => {
          const handler = handlers.get(el);
          if (handler) el.removeEventListener('click', handler);
        });
        handlers.clear();
      };
    },
    { scope: containerRef }
  );

  return (
    <section id="contact" ref={containerRef}>
      <div className="contact-container">
        {/* Left Column - Product Grid */}
        <div className="contact-image-wrapper">
          <div className="image-container">
            <div className="images">
              <div className="product product-1" data-grid="img-1" ><img className='absolute inset-0' src='/images/game.png'/></div>
              <div className="product product-2" data-grid="img-2" ><img className='absolute inset-0' src='/images/camera.png'/></div>
              <div className="product product-3" data-grid="img-3" ><img className='absolute inset-0' src='/images/coding.png'/></div>
              <div className="product product-4" data-grid="img-4" ><img className='absolute inset-0' src='/images/chat.png'/></div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="contact-form-wrapper">
          <div className="contact-header">
            <h1>Get in Touch</h1>
            <p className="contact-subtitle">Let's build something together.</p>
          </div>

          <form onSubmit={handleSubmit} className="inquiry-form">
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

      <div className="right-flower" />
    </section>
  );
}