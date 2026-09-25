import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  useScrollAnimation();

  return (
    <div className="about-page">
      <section className="about-hero fade-up">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>Our Story</h1>
          <p>Rooted in tradition, grown with love.</p>
        </div>
      </section>
      
      <section className="about-content fade-up">
        <div className="container">
          <div className="mission-vision">
            <h2>Mission & Vision</h2>
            <p>Our mission is to provide the finest quality Kathol directly from farms to your kitchen, ensuring fair trade for farmers and healthy food for families.</p>
          </div>
        </div>
      </section>

      <section className="values-section fade-up">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Honest sourcing and transparent pricing.</p>
            </div>
            <div className="value-card">
              <h3>Quality</h3>
              <p>Uncompromising standards from farm to table.</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>Empowering local farming communities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta fade-up">
        <div className="container text-center">
          <h2>Taste the Farmish Difference</h2>
          <Link to="/shop" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>
    </div>
  );
}
