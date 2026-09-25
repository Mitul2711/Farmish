import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, HandHeart, Sprout, Truck } from 'lucide-react';
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
          <div className="story-intro">
            <div className="story-intro-copy">
              <span className="eyebrow">The Farmish way</span>
              <h2>Good food should have a clear beginning.</h2>
              <p>Farmish connects you directly with the people who grow your food. We source our products from trusted farmers, care for every batch, and deliver the goodness of the farm to your doorstep.</p>
              <p>That means fewer unnecessary layers, more honest value for farmers, and quality you can feel good about bringing home.</p>
            </div>
            <div className="story-intro-note">
              <Sprout size={28} />
              <strong>From their fields to your family</strong>
              <span>Every product carries the care of the hands that grew it.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="farm-to-home-story fade-up">
        <div className="container">
          <div className="story-section-heading">
            <span className="eyebrow">From farm to home</span>
            <h2>A shorter journey. A better connection.</h2>
            <p>We stay close to the source so you can stay close to what matters: fresh, thoughtfully handled products and a fairer food system.</p>
          </div>
          <div className="story-steps">
            <div className="story-step">
              <div className="story-step-icon"><HandHeart size={24} /></div>
              <span>01</span>
              <h3>We partner with farmers</h3>
              <p>We build lasting relationships with growers who take pride in their land, their harvest, and their craft.</p>
            </div>
            <div className="story-step">
              <div className="story-step-icon"><CheckCircle2 size={24} /></div>
              <span>02</span>
              <h3>We select with care</h3>
              <p>Every batch is checked for quality, cleanliness, and the wholesome standard Farmish promises.</p>
            </div>
            <div className="story-step">
              <div className="story-step-icon"><Truck size={24} /></div>
              <span>03</span>
              <h3>We deliver within 24 hours</h3>
              <p>Carefully packed products travel from our network of farms to your kitchen within 24 hours, ready for everyday meals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section fade-up">
        <div className="container">
          <div className="story-section-heading compact">
            <span className="eyebrow">What we stand for</span>
            <h2>More than a product in a packet</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-number">01</span>
              <h3>Fairer farming</h3>
              <p>Direct sourcing helps farmers receive better value for the work behind every harvest.</p>
            </div>
            <div className="value-card">
              <span className="value-number">02</span>
              <h3>Everyday quality</h3>
              <p>We choose good ingredients with the same care we would use for our own families.</p>
            </div>
            <div className="value-card">
              <span className="value-number">03</span>
              <h3>A healthier connection</h3>
              <p>When farmers and families are closer, trust, transparency, and better food follow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-promise fade-up">
        <div className="container">
          <div className="promise-panel">
            <div>
              <span className="eyebrow">Our promise to you</span>
              <h2>Know where your food begins.</h2>
              <p>When you choose Farmish, you are choosing products with a story, farmers with a partner, and a more thoughtful way to fill your kitchen.</p>
            </div>
            <Link to="/shop" className="text-link">Explore the collection <ArrowRight size={18} /></Link>
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
