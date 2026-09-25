import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Camera, Globe, Play, Phone } from 'lucide-react';
import config from '../../data/config';
import './Footer.css';

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo"><Leaf /> {config.brand.name}</Link>
            <p>Farm To Family. Goodness grown at the source, packed by hand.</p>
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
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Stay Connected</h4>
            <form className="newsletter-form" onSubmit={e => { e.preventDefault(); setIsSubscribed(true); }}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            {isSubscribed && <p className="newsletter-confirmation">You’re on the list for Farmish updates.</p>}
            <p className="whatsapp-cta">Or message us on WhatsApp</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Farmish. All rights reserved.</span>
          <span>Farm to Family</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
