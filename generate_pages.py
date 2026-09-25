import os, base64

base_dir = r'C:\Users\Avni\.gemini\antigravity\scratch\farmish\src\pages'
os.makedirs(base_dir, exist_ok=True)

files = {}

files['Home.jsx'] = """import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShieldCheck, Package, Truck, Award, Leaf, Users, BadgeIndianRupee, Wheat, ClipboardCheck, Factory, PackageCheck, Home as HomeIcon, Star, Mail } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import products from '../data/products';
import categories from '../data/categories';
import recipes from '../data/recipes';
import './Home.css';

export default function Home() {
  useScrollAnimation();

  const featuredProducts = products?.slice(0, 6) || [];
  const featuredRecipes = recipes?.slice(0, 3) || [];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section fade-up">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Goodness Grown at the Source.</h1>
          <p className="hero-subtitle">Premium Kathol, sourced directly from farms and delivered fresh to your home.</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">Shop Kathol</Link>
            <Link to="/about" className="btn btn-outline-light">Explore Our Story</Link>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators Bar */}
      <section className="trust-bar fade-up">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <Sprout className="trust-icon" />
              <span>Direct From Farm</span>
            </div>
            <div className="trust-item">
              <ShieldCheck className="trust-icon" />
              <span>Quality Checked</span>
            </div>
            <div className="trust-item">
              <Package className="trust-icon" />
              <span>Freshly Packed</span>
            </div>
            <div className="trust-item">
              <Truck className="trust-icon" />
              <span>Delivered to Your Door</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Products Section */}
      <section className="featured-products fade-up">
        <div className="container">
          <div className="section-header">
            <h2>From Our Farms to Your Kitchen</h2>
            <p>Handpicked kathol, sourced with care</p>
          </div>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/shop" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* 4. Product Categories Section */}
      <section className="categories-section fade-up">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
          </div>
          <div className="category-grid">
            {(categories || []).slice(0, 4).map(category => (
              <Link to={`/shop?category=${category.slug}`} key={category.id} className="category-card">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Farmish Section */}
      <section id="why-farmish" className="why-farmish fade-up">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Farmish?</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-circle"><Sprout /></div>
              <h3>Direct From Farm</h3>
              <p>We work directly with farmers, cutting out middlemen.</p>
            </div>
            <div className="feature-card">
              <div className="icon-circle"><Award /></div>
              <h3>Quality First</h3>
              <p>Rigorous quality checks at every step.</p>
            </div>
            <div className="feature-card">
              <div className="icon-circle"><Leaf /></div>
              <h3>Naturally Good</h3>
              <p>No artificial preservatives or colors.</p>
            </div>
            <div className="feature-card">
              <div className="icon-circle"><Package /></div>
              <h3>Freshly Packed</h3>
              <p>Hygienically processed and packed to retain freshness.</p>
            </div>
            <div className="feature-card">
              <div className="icon-circle"><Users /></div>
              <h3>Farmer Connection</h3>
              <p>Supporting local communities and sustainable practices.</p>
            </div>
            <div className="feature-card">
              <div className="icon-circle"><BadgeIndianRupee /></div>
              <h3>Honest Pricing</h3>
              <p>Fair prices for you, better returns for farmers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Farm to Home Journey Section */}
      <section id="farm-to-home" className="journey-section fade-up">
        <div className="container">
          <div className="section-header">
            <h2>From Farm to Your Home</h2>
          </div>
          <div className="timeline">
            <div className="timeline-step">
              <div className="step-icon"><Wheat /></div>
              <h4>01 Farm</h4>
              <p>Harvested</p>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-step">
              <div className="step-icon"><ClipboardCheck /></div>
              <h4>02 Quality Check</h4>
              <p>Inspected</p>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-step">
              <div className="step-icon"><Factory /></div>
              <h4>03 Processing</h4>
              <p>Cleaned</p>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-step">
              <div className="step-icon"><PackageCheck /></div>
              <h4>04 Packing</h4>
              <p>Sealed</p>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-step">
              <div className="step-icon"><HomeIcon /></div>
              <h4>05 Your Home</h4>
              <p>Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Story Section */}
      <section className="our-story-section fade-up">
        <div className="container">
          <div className="split-layout">
            <div className="split-image">
              <img src="/images/farmer-portrait.png" alt="Farmer" />
            </div>
            <div className="split-content">
              <h2>Our Story</h2>
              <p>We started Farmish with a simple belief: everyone deserves access to honest, high-quality food. Our journey began in the fertile lands of Gujarat...</p>
              <p>We bridge the gap between farmers and consumers.</p>
              <Link to="/about" className="btn btn-primary">Discover Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Farmer Section */}
      <section className="farmer-section fade-up">
        <div className="farmer-overlay"></div>
        <div className="container">
          <h2>Meet the People Behind Your Food</h2>
          <p>We empower communities to bring you the best.</p>
          <div className="stats-grid">
            <div className="stat-card"><h3>500+</h3><p>Farmers</p></div>
            <div className="stat-card"><h3>15+</h3><p>Regions</p></div>
            <div className="stat-card"><h3>20+</h3><p>Products</p></div>
            <div className="stat-card"><h3>1000+</h3><p>Quality Checks</p></div>
          </div>
        </div>
      </section>

      {/* 9. Featured Recipes Section */}
      <section className="recipes-section fade-up">
        <div className="container">
          <div className="section-header">
            <h2>Cook with Farmish</h2>
          </div>
          <div className="recipe-grid">
            {featuredRecipes.map(recipe => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                <div className="recipe-content">
                  <span className="recipe-badge">{recipe.mainProduct}</span>
                  <h3>{recipe.title}</h3>
                  <div className="recipe-meta">
                    <span>{recipe.prepTime}</span> • <span>{recipe.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/recipes" className="btn btn-primary">Explore All Recipes</Link>
          </div>
        </div>
      </section>

      {/* 10. Customer Reviews Section */}
      <section className="reviews-section fade-up">
        <div className="container">
          <div className="section-header">
            <h2>Loved by Families</h2>
          </div>
          <div className="reviews-carousel">
            {[1, 2, 3].map((i) => (
              <div key={i} className="review-card">
                <div className="stars"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
                <p>"The quality of the toor dal is phenomenal! Tastes just like home."</p>
                <div className="reviewer">- Anjali D. <span>(Toor Dal)</span></div>
              </div>
            ))}
          </div>
          <p className="disclaimer">*Demo reviews</p>
        </div>
      </section>

      {/* 11. Quality Section */}
      <section className="quality-section fade-up">
        <div className="container">
          <div className="section-header">
            <h2>Quality You Can Trust</h2>
          </div>
          <div className="quality-grid">
            <div className="quality-item">100% Sortex Cleaned</div>
            <div className="quality-item">Unpolished</div>
            <div className="quality-item">No Added Colors</div>
            <div className="quality-item">High Protein</div>
            <div className="quality-item">Hygienically Packed</div>
            <div className="quality-item">Lab Tested</div>
          </div>
          <div className="certifications-placeholder">
            [Certifications Area]
          </div>
        </div>
      </section>

      {/* 12. Newsletter/CTA Section */}
      <section className="newsletter-section fade-up">
        <div className="container">
          <h2>Stay Connected with Farmish</h2>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <div className="whatsapp-cta">
            <p>Or message us on WhatsApp</p>
          </div>
        </div>
      </section>
    </div>
  );
}
"""

files['Home.css'] = """
.home-page {
  display: flex;
  flex-direction: column;
}

.hero-section {
  position: relative;
  height: 90vh;
  background-image: url('/images/hero-farm.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-surface, #fff);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6));
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 2rem;
}

.hero-title {
  font-family: var(--font-heading, 'Playfair Display');
  font-size: clamp(3rem, 5vw, 5rem);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md, 8px);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal, 0.3s);
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-primary, #2D6A4F);
  color: #fff;
  border: none;
}
.btn-primary:hover {
  background-color: var(--color-primary-dark, #1B4332);
}

.btn-outline-light {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
}
.btn-outline-light:hover {
  background-color: #fff;
  color: var(--color-primary, #2D6A4F);
}

.trust-bar {
  background-color: var(--color-bg, #FEFCF3);
  padding: 2rem 0;
  border-bottom: 1px solid var(--color-border, #E8E0D4);
}
.trust-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  color: var(--color-primary, #2D6A4F);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}
.section-header h2 {
  font-family: var(--font-heading, 'Playfair Display');
  font-size: 2.5rem;
  color: var(--color-text, #2C2C2C);
}

.featured-products, .categories-section, .why-farmish, .journey-section, .our-story-section, .recipes-section, .reviews-section, .quality-section {
  padding: 5rem 0;
  background-color: var(--color-surface, #fff);
}
.why-farmish, .journey-section, .reviews-section {
  background-color: var(--color-bg, #FEFCF3);
}

.product-grid, .recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.section-footer {
  text-align: center;
  margin-top: 3rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.category-card {
  position: relative;
  border-radius: var(--radius-lg, 16px);
  overflow: hidden;
  display: block;
  transition: transform 0.3s, box-shadow 0.3s;
}
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg, 0 10px 25px rgba(0,0,0,0.1));
}
.category-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}
.category-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: #fff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.feature-card {
  background: var(--color-surface, #fff);
  padding: 2rem;
  border-radius: var(--radius-lg, 16px);
  text-align: center;
  box-shadow: var(--shadow-sm, 0 4px 6px rgba(0,0,0,0.05));
}
.icon-circle {
  width: 64px;
  height: 64px;
  background: var(--color-bg, #FEFCF3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--color-primary, #2D6A4F);
}

.timeline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 2rem;
}
.timeline-step {
  text-align: center;
  min-width: 150px;
}
.step-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background: #fff;
  border: 2px solid var(--color-primary, #2D6A4F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary, #2D6A4F);
}
.timeline-line {
  flex-grow: 1;
  height: 2px;
  background: var(--color-border, #E8E0D4);
  min-width: 50px;
  margin: 0 1rem;
  transform: translateY(-20px);
}

.split-layout {
  display: flex;
  gap: 4rem;
  align-items: center;
}
.split-image img {
  width: 100%;
  border-radius: var(--radius-lg, 16px);
}
.split-content {
  flex: 1;
}

.farmer-section {
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1595858309605-e3d81b162589?w=1600&fit=crop');
  background-size: cover;
  background-attachment: fixed;
  padding: 6rem 0;
  color: #fff;
  text-align: center;
}
.farmer-overlay {
  position: absolute;
  inset: 0;
  background: rgba(45, 106, 79, 0.85);
}
.farmer-section .container {
  position: relative;
  z-index: 1;
}
.stats-grid {
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  flex-wrap: wrap;
  gap: 2rem;
}
.stat-card h3 {
  font-size: 3rem;
  font-family: var(--font-heading, 'Playfair Display');
  color: var(--color-accent, #D4A843);
}

.recipe-card {
  background: #fff;
  border-radius: var(--radius-lg, 16px);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.recipe-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.recipe-content {
  padding: 1.5rem;
}
.recipe-badge {
  background: var(--color-bg);
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}
.recipe-meta {
  color: var(--color-text-light, #999);
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.reviews-carousel {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding-bottom: 2rem;
}
.review-card {
  min-width: 300px;
  background: #fff;
  padding: 2rem;
  border-radius: var(--radius-lg, 16px);
  box-shadow: var(--shadow-sm);
}
.stars {
  color: var(--color-accent, #D4A843);
  margin-bottom: 1rem;
}

.quality-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  text-align: center;
}
.quality-item {
  padding: 1.5rem;
  background: var(--color-bg);
  border-radius: var(--radius-md);
  font-weight: 500;
}
.certifications-placeholder {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  border: 2px dashed var(--color-border);
  color: var(--color-text-light);
}

.newsletter-section {
  background-color: var(--color-primary, #2D6A4F);
  color: #fff;
  padding: 5rem 0;
  text-align: center;
}
.newsletter-form {
  max-width: 500px;
  margin: 2rem auto;
  display: flex;
  gap: 1rem;
}
.newsletter-form input {
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  border: none;
}
.newsletter-form button {
  background-color: var(--color-accent, #D4A843);
  color: #fff;
}
.newsletter-form button:hover {
  background-color: var(--color-accent-light, #E5C06E);
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.5rem; }
  .split-layout { flex-direction: column; }
  .timeline { flex-direction: column; gap: 2rem; }
  .timeline-line { width: 2px; height: 50px; margin: 0; transform: none; min-width: auto; }
  .newsletter-form { flex-direction: column; }
}
"""

files['About.jsx'] = """import React from 'react';
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
"""

files['About.css'] = """
.about-hero {
  height: 50vh;
  background-image: url('/images/hero-farm.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  position: relative;
}
.about-hero h1 {
  font-family: var(--font-heading);
  font-size: 4rem;
  z-index: 1;
  position: relative;
}
.about-hero p {
  z-index: 1;
  position: relative;
  font-size: 1.2rem;
}
.about-content, .values-section, .about-cta {
  padding: 5rem 0;
  text-align: center;
}
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
.value-card {
  padding: 2rem;
  background: var(--color-bg);
  border-radius: var(--radius-lg);
}
"""

files['Contact.jsx'] = """import React from 'react';
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
"""

files['Contact.css'] = """
.contact-page {
  padding: 5rem 0;
}
.contact-header {
  margin-bottom: 4rem;
}
.contact-layout {
  display: flex;
  gap: 4rem;
}
.contact-form-container, .contact-info {
  flex: 1;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.contact-form input, .contact-form select, .contact-form textarea {
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: inherit;
}
.info-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}
.info-item svg {
  color: var(--color-primary);
  width: 24px;
  height: 24px;
}
.map-placeholder {
  height: 200px;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  border: 2px dashed var(--color-border);
}
@media (max-width: 768px) {
  .contact-layout {
    flex-direction: column;
  }
}
"""

files['Recipes.jsx'] = """import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import recipes from '../data/recipes';
import './Recipes.css';

export default function Recipes() {
  useScrollAnimation();

  return (
    <div className="recipes-page fade-up">
      <section className="recipes-hero">
        <div className="container text-center">
          <h1>Farm-Fresh Recipes</h1>
          <p>Delicious meals made with Farmish Kathol.</p>
        </div>
      </section>
      
      <section className="recipes-content">
        <div className="container">
          <div className="recipe-grid">
            {(recipes || []).map(recipe => (
              <Link to={`/recipe/${recipe.slug}`} key={recipe.id} className="recipe-card-link">
                <div className="recipe-card">
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="recipe-content">
                    <span className="recipe-badge">{recipe.difficulty}</span>
                    <h3>{recipe.title}</h3>
                    <p className="recipe-main-prod">Main: {recipe.mainProduct}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
"""

files['Recipes.css'] = """
.recipes-hero {
  padding: 6rem 0;
  background: var(--color-bg);
}
.recipes-hero h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: var(--color-primary);
}
.recipe-card-link {
  text-decoration: none;
  color: inherit;
}
.recipe-main-prod {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
}
"""

files['RecipeDetail.jsx'] = """import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import recipes from '../data/recipes';
import './RecipeDetail.css';

export default function RecipeDetail() {
  const { slug } = useParams();
  useScrollAnimation();
  
  const recipe = (recipes || []).find(r => r.slug === slug) || {
    title: "Delicious Dal",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&fit=crop",
    prepTime: "15 mins",
    cookTime: "30 mins",
    difficulty: "Easy",
    servings: 4,
    ingredients: ["1 cup Toor Dal", "2 tbsp Oil", "Spices"],
    instructions: ["Wash dal", "Boil dal", "Add spices"]
  };

  return (
    <div className="recipe-detail-page fade-up">
      <div className="recipe-hero">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="container recipe-main">
        <h1>{recipe.title}</h1>
        <div className="recipe-meta-detail">
          <span>Prep: {recipe.prepTime}</span>
          <span>Cook: {recipe.cookTime}</span>
          <span>Difficulty: {recipe.difficulty}</span>
          <span>Servings: {recipe.servings}</span>
        </div>
        
        <div className="recipe-body">
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
            <Link to="/shop" className="btn btn-primary mt-4">Shop Ingredients</Link>
          </div>
          <div className="instructions">
            <h2>Instructions</h2>
            <ol>
              {recipe.instructions.map((inst, i) => <li key={i}>{inst}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

files['RecipeDetail.css'] = """
.recipe-hero img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}
.recipe-main {
  margin-top: -3rem;
  position: relative;
  background: #fff;
  padding: 3rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  margin-bottom: 4rem;
}
.recipe-meta-detail {
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0 3rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  flex-wrap: wrap;
}
.recipe-body {
  display: flex;
  gap: 4rem;
}
.ingredients {
  flex: 1;
  background: var(--color-bg);
  padding: 2rem;
  border-radius: var(--radius-md);
}
.instructions {
  flex: 2;
}
.instructions ol {
  padding-left: 1.5rem;
}
.instructions li {
  margin-bottom: 1rem;
  line-height: 1.6;
}
.mt-4 {
  margin-top: 2rem;
  display: inline-block;
}
@media (max-width: 768px) {
  .recipe-body {
    flex-direction: column;
  }
}
"""

files['Blog.jsx'] = """import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Blog.css';

export default function Blog() {
  useScrollAnimation();

  const posts = [
    { slug: 'benefits-of-toor-dal', title: 'Health Benefits of Toor Dal', excerpt: 'Discover why this staple is so good for you.', category: 'Nutrition', date: 'Oct 10, 2023', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&fit=crop' },
    { slug: 'farming-practices', title: 'Sustainable Farming Practices', excerpt: 'How our farmers are protecting the earth.', category: 'Farming', date: 'Sep 25, 2023', image: 'https://images.unsplash.com/photo-1595858309605-e3d81b162589?w=800&fit=crop' }
  ];

  return (
    <div className="blog-page fade-up">
      <section className="blog-hero">
        <div className="container text-center">
          <h1>From the Farm Journal</h1>
          <p>Stories, tips, and news from Farmish.</p>
        </div>
      </section>
      
      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {posts.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card-link">
                <div className="blog-card">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-card-content">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-meta">
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
"""

files['Blog.css'] = """
.blog-hero {
  padding: 6rem 0;
  background: var(--color-primary);
  color: #fff;
}
.blog-hero h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
}
.blog-content {
  padding: 5rem 0;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
.blog-card-link {
  text-decoration: none;
  color: inherit;
}
.blog-card {
  background: #fff;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s;
}
.blog-card:hover {
  transform: translateY(-5px);
}
.blog-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
.blog-card-content {
  padding: 1.5rem;
}
.blog-category {
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
}
.blog-card h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}
.blog-meta {
  margin-top: 1rem;
  color: var(--color-text-light);
  font-size: 0.875rem;
}
"""

files['BlogPost.jsx'] = """import React from 'react';
import { useParams } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  useScrollAnimation();

  return (
    <div className="blog-post-page fade-up">
      <div className="container post-container">
        <div className="post-header text-center">
          <span className="post-category">Nutrition</span>
          <h1>Health Benefits of Toor Dal</h1>
          <div className="post-meta">
            <span>By Farmish Team</span> • <span>Oct 10, 2023</span> • <span>5 min read</span>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&fit=crop" alt="Post Cover" className="post-cover" />
        <div className="post-body">
          <p>Toor dal, also known as pigeon pea, is a staple in many Indian households. But beyond its comforting taste, it packs a serious nutritional punch...</p>
          <h2>Rich in Protein</h2>
          <p>As a plant-based source of protein, it is essential for muscle building and repair.</p>
          <h2>High in Fiber</h2>
          <p>Good for digestion and keeps you feeling full longer.</p>
        </div>
        <div className="post-share">
          <strong>Share this article:</strong>
          <div className="share-buttons">
            <button className="btn btn-outline-light share-btn">Facebook</button>
            <button className="btn btn-outline-light share-btn">Twitter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

files['BlogPost.css'] = """
.post-container {
  max-width: 800px;
  padding: 5rem 1rem;
}
.post-header {
  margin-bottom: 3rem;
}
.post-category {
  color: var(--color-accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.post-header h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  margin: 1rem 0;
}
.post-meta {
  color: var(--color-text-secondary);
}
.post-cover {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  margin-bottom: 3rem;
}
.post-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
}
.post-body h2 {
  margin: 2rem 0 1rem;
  font-family: var(--font-heading);
}
.post-share {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 1rem;
}
.share-buttons {
  display: flex;
  gap: 1rem;
}
.share-btn {
  color: var(--color-text);
  border-color: var(--color-border);
}
.share-btn:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}
@media (max-width: 768px) {
  .post-header h1 { font-size: 2rem; }
  .post-cover { height: 250px; }
}
"""

for k, v in files.items():
    with open(os.path.join(base_dir, k), 'w', encoding='utf-8') as f:
        f.write(v)

print('Done writing pages.')
