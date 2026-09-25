import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  useScrollAnimation();

  return (
    <div className="contact-page fade-up">
      <div className="container">
        <div className="contact-header text-center">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-form-container">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" />
              <select required>
                <option value="">Select a Subject</option>
                <option value="support">Customer Support</option>
                <option value="wholesale">Wholesale Inquiry</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="info-item">
              <Phone />
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="info-item">
              <Mail />
              <div>
                <h4>Email</h4>
                <p>hello@farmish.com</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin />
              <div>
                <h4>Address</h4>
                <p>123 Farmish Lane, Gujarat, India</p>
              </div>
            </div>
            <div className="map-placeholder">
              <p>Google Maps Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
