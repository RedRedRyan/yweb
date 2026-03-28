'use client';

import gsap from 'gsap';
import { Flip } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

interface FormData {
  Email: string;
  Name: string;
  Message: string;
}

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    Email: '',
    Name: '',
    Message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // All fields must be non-empty to enable the submit button
  const isFormComplete = Object.values(formData).every((v) => v.trim() !== '');

  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEle = e.currentTarget;
    const data = new FormData(formEle);

    setIsLoading(true);

    fetch(
      'https://script.google.com/macros/s/AKfycbwvtHDUeNLeCe7dJBIss40vop-2-gwUmrC9Qvlw3K1nCcnemNlLlbQotZN2-7hbogdk/exec',
      {
        method: 'POST',
        body: data,
      }
    )
      // ✅ App Script returns plain text, not JSON — use .text() not .json()
      .then((res) => res.text())
      .then((responseText) => {
        console.log(responseText);
        setSubmitted(true);
        // Clear all fields after successful submission
        setFormData({ Email: '', Name: '', Message: '' });
        // Reset the button after 3 seconds so the form can be reused
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((err) => console.error('Submission error:', err))
      .finally(() => setIsLoading(false));
  }

  useGSAP(
    () => {
      const products = gsap.utils.toArray<HTMLElement>('.product');
      if (!products.length) return;

      activeRef.current = products[0];

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
              <div className="product product-1" data-grid="img-1"><img className='absolute inset-0' src='/images/game.png' /></div>
              <div className="product product-2" data-grid="img-2"><img className='absolute inset-0' src='/images/camera.png' /></div>
              <div className="product product-3" data-grid="img-3"><img className='absolute inset-0' src='/images/coding.png' /></div>
              <div className="product product-4" data-grid="img-4"><img className='absolute inset-0' src='/images/chat.png' /></div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="contact-form-wrapper">
          <div className="contact-header">
            <h1>Get in Touch</h1>
            <p className="contact-subtitle">Let's build something together.</p>
            
          </div>

          <form id="inquiry-form" onSubmit={Submit} className="inquiry-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="Name">Your Name</label>
                <input
                  id="Name"
                  type="text"
                  name="Name"     
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Your Email</label>
                <input
                  id="Email"
                  type="email"
                  name="Email"     
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <textarea
                id="Message"
                name="Message"     
                value={formData.Message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={6}
                required
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={!isFormComplete || isLoading || submitted}
            >
              {submitted ? 'Sent! ✓' : isLoading ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
          
        </div>
      </div>

      <div className="right-flower" />
    </section>
  );
}