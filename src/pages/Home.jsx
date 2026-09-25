import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, ShieldCheck, Package, Truck, Award, Leaf, Users, BadgeIndianRupee, Wheat, ClipboardCheck, Factory, PackageCheck, Home as HomeIcon, Star, Mail } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import products from '../data/products';
import categories from '../data/categories';
import recipes from '../data/recipes';
import './Home.css';

export default function Home() {
  useScrollAnimation();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const elementId = location.hash.replace('#', '');
    const element = document.getElementById(elementId);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [location.pathname, location.hash]);

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
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=700&fit=crop" alt="Indian Farmland" />
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
              <Link to={`/recipe/${recipe.slug}`} key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.name} />
                <div className="recipe-content">
                  <span className="recipe-badge">{recipe.mainProduct}</span>
                  <h3>{recipe.name}</h3>
                  <div className="recipe-meta">
                    <span>{recipe.prepTime}</span> • <span>{recipe.difficulty}</span>
                  </div>
                </div>
              </Link>
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
