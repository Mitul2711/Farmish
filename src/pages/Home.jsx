import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check, Package, ShieldCheck, ShoppingBag, Sprout, Truck } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import useScrollAnimation from '../hooks/useScrollAnimation';
import products from '../data/products';
import categories from '../data/categories';
import recipes from '../data/recipes';
import './Home.css';

const whyItems = [
  ['01', 'Direct From Farm', 'We work directly with farmers, cutting out unnecessary layers.'],
  ['02', 'Quality First', 'Every batch is checked before it reaches your kitchen.'],
  ['03', 'Naturally Good', 'Simple, wholesome ingredients with no added colors.'],
  ['04', 'Freshly Packed', 'Hygienically processed and packed to retain freshness.'],
  ['05', 'Farmer Connection', 'Long-term relationships that support local communities.'],
  ['06', 'Honest Pricing', 'Fair prices for you, better returns for farmers.']
];

const stages = [
  ['01', 'Farm', 'Harvested'], ['02', 'Quality Check', 'Inspected'], ['03', 'Processing', 'Cleaned'],
  ['04', 'Packing', 'Sealed'], ['05', 'Your Home', 'Delivered']
];

const qualityClaims = ['100% Sortex Cleaned', 'Unpolished', 'No Added Colors', 'High Protein', 'Hygienically Packed', 'Lab Tested'];

function BotanicalField({ tone = 'forest', variant = 'tree' }) {
  return (
    <div className={`botanical-field botanical-${tone} botanical-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 520 420" role="presentation">
        <g className="botanical-tree"><path d="M58 415C62 351 66 290 70 229c-4-54 12-102 46-126 21-16 51-15 69 4 21-47 70-59 103-31 34 28 34 83 5 111 35-5 62 16 68 47 8 41-26 70-68 66 16 34 4 70-30 83-29 11-58-3-71-29-30 19-71 9-87-22-3 39-5 79-6 108Z" /><path d="M112 414c13-67 23-127 38-184m0 184c-3-61-4-116-5-162m5 80c27-37 55-62 83-82m-65 37c-26-16-47-29-62-48" /></g>
        <g className="botanical-sapling"><path d="M403 420c-3-60-4-112-3-165" /><path d="M400 305c-27-28-53-30-75-11 20 29 45 34 75 11Zm4-38c22-32 47-38 73-22-15 33-40 42-73 22Zm-4 91c-25-25-49-26-69-8 18 27 41 30 69 8Z" /></g>
        <g className="botanical-frond"><path d="M280 418c17-61 36-108 68-157" /><path d="M299 369c-27-5-43-20-47-45 25-3 42 12 47 45Zm14-39c-23-13-32-32-27-54 23 6 32 24 27 54Zm14-37c-10-20-7-39 11-54 15 18 10 35-11 54Z" /></g>
        <g className="botanical-spray"><path d="M456 120c-13 52-18 91-13 122" /><path d="M447 170c-25-2-38-14-39-35 21-3 34 9 39 35Zm5-27c22-9 36-23 38-43-22 2-35 16-38 43Zm-3 54c-21 4-33 16-35 36 21 1 34-11 35-36Z" /></g>
        <g className="botanical-seedling"><path d="M221 420c1-36 6-62 15-84" /><path d="M235 349c-25 1-39-9-43-29 23-5 37 5 43 29Zm2-14c18-17 35-21 52-11-10 20-27 25-52 11Z" /></g>
      </svg>
    </div>
  );
}

function SectionHeading({ number, eyebrow, title, action }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div><span className="section-number">{number}</span>{action}</div>;
}

function HomeProductCard({ product, selectedSize, onSelectSize, onAdd, isAdded }) {
  const displaySize = selectedSize || product.packSizes[0];
  return (
    <article className="home-product-card">
      <Link to={`/product/${product.slug}`} className="product-photo-link"><div className="home-product-photo"><img src={product.image} alt={product.name} />{product.isBestseller && <span className="product-flag">Bestseller</span>}{product.isNew && <span className="product-flag">New</span>}</div></Link>
      <div className="home-product-info"><span className="product-category">{product.category}</span><Link to={`/product/${product.slug}`}><h3>{product.name}</h3></Link><p>{product.shortDesc}</p><div className="product-rating" aria-label={`${product.rating} out of 5 stars`}><span className="stars">★★★★★</span><span>{product.rating} ({product.reviewCount})</span></div><div className="freshness-timeline" aria-label="Farm to home freshness journey"><span className="active">Harvested</span><i></i><span className="active">Checked</span><i></i><span className="active">Packed</span><i></i><span>Home</span></div><div className="product-price-line"><strong>₹{displaySize.price}</strong><span className="product-mrp">MRP ₹{product.originalPrice}</span>{product.discount && <span className="discount-chip">{product.discount}% OFF</span>}</div><div className="weight-pills" aria-label={`Choose pack size for ${product.name}`}>{product.packSizes.map(pack => <button type="button" key={pack.size} className={displaySize.size === pack.size ? 'selected' : ''} onClick={() => onSelectSize(pack)}>{pack.size}</button>)}</div><button type="button" className={`add-product-btn ${isAdded ? 'added' : ''}`} onClick={() => onAdd(product, displaySize)}><ShoppingBag size={17} /> {isAdded ? `Added ${displaySize.size}` : 'Add to Cart'}</button></div>
    </article>
  );
}

export default function Home() {
  useScrollAnimation();
  const location = useLocation();
  const { addToCart } = useContext(CartContext);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedProductId, setAddedProductId] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (!location.hash) return;
    const element = document.getElementById(location.hash.replace('#', ''));
    if (element) setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }, [location.pathname, location.hash]);

  const featuredProducts = products.slice(0, 6);
  const featuredRecipes = recipes.slice(0, 3);
  const getSelectedSize = product => selectedSizes[product.id] || product.packSizes[0];
  const handleAddToCart = (product, selectedSize) => {
    addToCart(product, selectedSize, 1);
    setAddedProductId(product.id);
    window.setTimeout(() => setAddedProductId(current => current === product.id ? null : current), 1400);
  };

  return (
    <div className="home-page">
      <section className="home-hero fade-up"><BotanicalField variant="sapling" /><div className="container hero-layout"><div className="hero-copy"><span className="eyebrow">Farm to Family</span><h1>Goodness Grown at the Source.</h1><p>Premium kathol, sourced directly from farms and delivered fresh to your home.</p><div className="hero-actions"><Link to="/shop" className="home-btn home-btn-primary">Shop Kathol <ArrowRight size={17} /></Link><Link to="/about" className="home-btn home-btn-outline">Explore Our Story</Link></div></div><div className="hero-image-wrap"><img src={products[0].image} alt="Freshly harvested Premium Toor Dal" /><span className="hero-image-caption">Harvested with care</span></div></div></section>

      <section className="trust-strip"><div className="container trust-items">{[['Direct From Farm', Sprout], ['Quality Checked', ShieldCheck], ['Freshly Packed', Package], ['Delivered to Your Door', Truck]].map(([label, Icon]) => <div className="trust-item" key={label}><Icon size={18} /><strong>{label}</strong></div>)}</div></section>

      <section className="home-section products-section fade-up"><BotanicalField variant="tree" /><div className="container"><SectionHeading number="01" eyebrow="From Our Farms to Your Kitchen" title="Handpicked kathol, sourced with care" action={<Link className="gold-link heading-action" to="/shop">View All Products <ArrowRight size={16} /></Link>} /><div className="home-product-grid">{featuredProducts.map(product => <HomeProductCard key={product.id} product={product} selectedSize={getSelectedSize(product)} onSelectSize={size => setSelectedSizes(current => ({ ...current, [product.id]: size }))} onAdd={handleAddToCart} isAdded={addedProductId === product.id} />)}</div></div></section>

      <section className="home-section categories-section fade-up"><BotanicalField variant="spray" /><div className="container"><SectionHeading number="02" eyebrow="Shop by Category" title="Four ways to stock your pantry" /><div className="category-grid">{categories.slice(0, 4).map(category => <Link to={`/shop?category=${category.slug}`} className="category-card" key={category.id}><img src={category.image} alt={category.name} /><div className="category-card-content"><h3>{category.name}</h3><p>{category.description}</p><span className="gold-link">Browse <ArrowRight size={15} /></span></div></Link>)}</div></div></section>

      <section id="why-farmish" className="home-section why-section fade-up"><BotanicalField variant="frond" /><div className="container"><SectionHeading number="03" eyebrow="Why Farmish" title="Why Choose Farmish?" /><div className="why-grid">{whyItems.map(([number, title, copy]) => <div className="why-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>

      <section id="farm-to-home" className="home-section journey-section fade-up"><BotanicalField variant="seedling" /><div className="container"><SectionHeading number="04" eyebrow="Farm to Home" title="From Farm to Your Home" /><div className="journey-grid">{stages.map(([number, place, verb], index) => <React.Fragment key={number}><div className="journey-stage"><span>{number}</span><strong>{place}</strong><em>{verb}</em></div>{index < stages.length - 1 && <i className="journey-dash" />}</React.Fragment>)}</div></div></section>

      <section className="home-section story-section fade-up"><BotanicalField variant="spray" /><div className="container story-layout"><div className="story-image"><img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&h=1100&fit=crop" alt="Farmland where Farmish products begin" /></div><div className="story-copy"><span className="eyebrow">Our Story</span><h2>We bridge the gap between farmers and consumers.</h2><p>We started Farmish with a simple belief: everyone deserves access to honest, high-quality food. Our journey began in the fertile lands of Gujarat, and every bag since has been traced back to the farm it grew on.</p><Link to="/about" className="gold-link">Discover Our Story <ArrowRight size={16} /></Link></div></div></section>

      <section className="stats-section fade-up"><BotanicalField tone="paper" variant="tree" /><div className="container stats-inner"><span className="eyebrow">Our farm-to-home impact</span><h2>From the people who grow it to the families who enjoy it.</h2><p>We empower communities to bring you the best.</p><div className="stats-grid">{[['500+', 'Farmers supported'], ['15+', 'Regions reached'], ['20+', 'Products to explore'], ['1000+', 'Quality checks']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="impact-counter"><span>Farm</span><i>→</i><span>Quality Check</span><i>→</i><span>Packed</span><i>→</i><span>Your Home</span></div></div></section>

      <section className="home-section recipes-section fade-up"><BotanicalField variant="frond" /><div className="container"><SectionHeading number="05" eyebrow="Cook with Farmish" title="Recipes from the field" action={<Link className="gold-link heading-action" to="/recipes">Explore All Recipes <ArrowRight size={16} /></Link>} /><div className="recipe-grid">{featuredRecipes.map(recipe => <Link to={`/recipe/${recipe.slug}`} className="recipe-card" key={recipe.id}><img src={recipe.image} alt={recipe.name} /><div className="recipe-card-content"><span>{recipe.mainProduct}</span><h3>{recipe.name}</h3><p>{recipe.prepTime} <i>•</i> {recipe.difficulty}</p></div></Link>)}</div></div></section>

      <section className="home-section quality-section fade-up"><BotanicalField variant="seedling" /><div className="container quality-inner"><span className="eyebrow">Quality You Can Trust</span><div className="quality-claims">{qualityClaims.map(claim => <span key={claim}><Check size={17} />{claim}</span>)}</div></div></section>

      <section className="newsletter-section fade-up"><BotanicalField tone="paper" /><div className="container newsletter-inner"><span className="eyebrow">Stay close to the harvest</span><h2>Goodness, delivered to your inbox.</h2><form onSubmit={event => { event.preventDefault(); setIsSubscribed(true); }}><input type="email" placeholder="Enter your email" aria-label="Email address" required /><button type="submit">Subscribe</button></form>{isSubscribed && <p className="subscribe-confirmation">You’re on the list for Farmish updates.</p>}<p>Or message us on WhatsApp</p></div></section>
    </div>
  );
}