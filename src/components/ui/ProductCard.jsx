import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { useToast } from './Toast';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.packSizes[0]);
  const { addToCart } = useContext(CartContext);
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
    showToast(`Added ${product.name} (${selectedSize.size}) to cart`, 'success');
  };

  return (
    <div className="product-card">
      <div className="product-badges">
        {product.isNew && <span className="badge badge-new">New</span>}
        {product.isBestseller && <span className="badge badge-bestseller">Bestseller</span>}
      </div>
      {product.discount && <div className="badge-discount">{product.discount}% OFF</div>}
      
      <Link to={`/product/${product.slug}`} className="product-image-container">
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.slug}`} className="product-title">{product.name}</Link>
        <p className="product-desc">{product.shortDesc}</p>
        
        <div className="product-rating">
          <Star size={14} className="star-icon" /> {product.rating} ({product.reviewCount})
        </div>
        
        <div className="product-price-row">
          <span className="product-price">₹{selectedSize.price}</span>
          {product.discount && (
            <span className="product-original-price">₹{Math.round(selectedSize.price / (1 - product.discount/100))}</span>
          )}
        </div>
        
        <div className="pack-selector">
          {product.packSizes.map(pack => (
            <button 
              key={pack.size} 
              className={`pack-pill ${selectedSize.size === pack.size ? 'selected' : ''}`}
              onClick={() => setSelectedSize(pack)}
            >
              {pack.size}
            </button>
          ))}
        </div>
        
        <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={!product.inStock}>
          <ShoppingBag size={18} /> {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
