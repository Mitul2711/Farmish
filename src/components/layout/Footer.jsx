import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Camera, Globe, Play, Phone } from 'lucide-react';
import config from '../../data/config';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo"><Leaf /> {config.brand.name}</Link>
            <p>{config.brand.tagline}</p>
            <div className="social-icons">
              <a href={config.social.instagram} className="social-icon" aria-label="Instagram"><Camera size={20} /></a>
              <a href={config.social.facebook} className="social-icon" aria-label="Facebook"><Globe size={20} /></a>
              <a href={config.social.youtube} className="social-icon" aria-label="YouTube"><Play size={20} /></a>
              <a href={config.social.whatsapp} className="social-icon" aria-label="WhatsApp"><Phone size={20} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/shop">All Products</Link></li>
              <li><Link to="/shop?category=dal">Dal</Link></li>
              <li><Link to="/shop?category=whole-kathol">Whole Kathol</Link></li>
              <li><Link to="/shop?category=premium-collection">Premium Collection</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Customer Support</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/return-policy">Return Policy</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Join Our Newsletter</h4>
            <p style={{color: 'var(--color-bg-alt)', opacity: 0.8, marginBottom: '12px'}}>Get updates on new products and recipes.</p>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} {config.brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
