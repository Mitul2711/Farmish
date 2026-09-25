import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Truck, RefreshCw, Minus, Plus, ShoppingCart, ChevronRight } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import products from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (!products) return;
    const found = products.find(p => p.id === id || p.id === parseInt(id));
    if (found) {
      setProduct(found);
      setSelectedSize(found.sizes ? found.sizes[0] : '1kg');
    } else {
      setProduct(null);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="product-detail-container not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you are looking for does not exist.</p>
        <Link to="/shop" className="btn btn-primary" style={{marginTop: '1rem', display: 'inline-block', padding: '0.75rem 1.5rem', background: 'var(--color-primary)', color: '#fff', borderRadius: '8px', textDecoration: 'none'}}>Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product, quantity, selectedSize);
    }
  };

  const handleBuyNow = () => {
    if (addToCart) {
      addToCart(product, quantity, selectedSize);
    }
    navigate('/checkout');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-detail-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={16} />
        <Link to="/shop">Shop</Link>
        <ChevronRight size={16} />
        <span>{product.name}</span>
      </div>

      <div className="product-detail-layout">
        <div className="product-gallery">
          <img src={product.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&fit=crop'} alt={product.name} className="main-image" />
          <div className="thumbnail-strip">
            <img src={product.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&fit=crop'} alt="thumb 1" className="thumbnail active" />
          </div>
        </div>

        <div className="product-info-wrapper">
          <span className="category-badge">{product.category}</span>
          <h1>{product.name}</h1>
          
          <div className="rating-row">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i < Math.floor(product.rating || 5) ? 'var(--color-accent)' : 'none'} color="var(--color-accent)" />
              ))}
            </div>
            <span className="review-count">({product.reviews || 0} reviews)</span>
          </div>

          <div className="price-row">
            <span className="current-price">₹{product.price}</span>
            {product.originalPrice && <span className="original-price">₹{product.originalPrice}</span>}
          </div>

          <div className="selector-section">
            <h4>Pack Size</h4>
            <div className="pack-sizes">
              {['500g', '1kg', '5kg'].map(size => (
                <button 
                  key={size}
                  className={`pack-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="selector-section">
            <h4>Quantity</h4>
            <div className="quantity-selector">
              <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16}/></button>
              <span className="qty-value">{quantity}</span>
              <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}><Plus size={16}/></button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn-add-cart" onClick={handleAddToCart}>
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="btn-buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <Truck size={24} />
              <span>Free delivery above ₹499</span>
            </div>
            <div className="trust-badge">
              <ShieldCheck size={24} />
              <span>100% Organic & Fresh Guarantee</span>
            </div>
            <div className="trust-badge">
              <RefreshCw size={24} />
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-section">
        <div className="tab-headers">
          {['description', 'nutrition', 'cooking', 'storage'].map(tab => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {activeTab === 'description' && (
            <div>
              <p>{product.description || 'Premium quality farm-fresh product.'}</p>
            </div>
          )}
          {activeTab === 'nutrition' && (
            <table className="nutrition-table">
              <tbody>
                <tr><th>Calories</th><td>340 kcal</td></tr>
                <tr><th>Protein</th><td>22g</td></tr>
                <tr><th>Carbohydrates</th><td>60g</td></tr>
                <tr><th>Fiber</th><td>15g</td></tr>
                <tr><th>Fat</th><td>1.5g</td></tr>
              </tbody>
            </table>
          )}
          {activeTab === 'cooking' && (
            <div>
              <p>Rinse well and soak for 30 minutes before cooking. Boil in water (ratio 1:3) until tender.</p>
            </div>
          )}
          {activeTab === 'storage' && (
            <div>
              <p>Store in a cool, dry place away from direct sunlight. Use an airtight container after opening.</p>
            </div>
          )}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-section">
          <h2>You May Also Like</h2>
          <div className="related-grid">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
