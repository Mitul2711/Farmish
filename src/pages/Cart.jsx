import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cart = [], removeFromCart, updateQuantity, cartTotal = 0 } = useContext(CartContext) || {};

  const subtotal = cartTotal || (cart || []).reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const deliveryFee = subtotal > 499 ? 0 : (subtotal > 0 ? 49 : 0);
  const total = subtotal + deliveryFee;

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <ShoppingBag size={80} className="empty-cart-icon" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/shop" style={{ display: 'inline-block', padding: '1rem 2rem', textDecoration: 'none', color: '#fff', backgroundColor: 'var(--color-primary)', borderRadius: '8px', fontWeight: 600 }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h1>
      
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={`${item.product.id}-${item.size}-${index}`} className="cart-item">
              <Link to={`/product/${item.product.id}`}>
                <img src={item.product.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop'} alt={item.product.name} className="cart-item-img" />
              </Link>
              <div className="cart-item-info">
                <h4><Link to={`/product/${item.product.id}`}>{item.product.name}</Link></h4>
                <div className="cart-item-meta">Pack Size: {item.size}</div>
                <div className="cart-item-price">₹{item.product.price}</div>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-selector">
                  <button className="qty-btn" onClick={() => updateQuantity && updateQuantity(item.product.id, item.size, item.quantity - 1)}>
                    <Minus size={14} />
                  </button>
                  <span className="qty-value" style={{padding: '0 0.75rem'}}>{item.quantity}</span>
                  <button className="qty-btn" onClick={() => updateQuantity && updateQuantity(item.product.id, item.size, item.quantity + 1)}>
                    <Plus size={14} />
                  </button>
                </div>
                <div className="cart-item-subtotal">₹{item.product.price * item.quantity}</div>
                <button className="remove-btn" onClick={() => removeFromCart && removeFromCart(item.product.id, item.size)}>
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span>
          </div>
          {subtotal > 0 && subtotal < 499 && (
            <div className="summary-row" style={{fontSize: '0.85rem', color: 'var(--color-primary)'}}>
              Add ₹{499 - subtotal} more for free delivery
            </div>
          )}
          
          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" />
            <button>Apply</button>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="checkout-btn" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
            <ArrowRight size={20} />
          </button>
          
          <Link to="/shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
