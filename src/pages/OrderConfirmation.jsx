import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, Truck, ArrowLeft, ShoppingBag } from 'lucide-react';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const [orderNumber, setOrderNumber] = useState('');
  
  useEffect(() => {
    setOrderNumber(`FM-${Math.floor(10000 + Math.random() * 90000)}`);
    window.scrollTo(0, 0);
  }, []);

  const orderData = location.state?.orderData || {
    paymentMethod: 'cod',
    deliveryMethod: 'standard',
    address: 'Your saved address',
    deliveryEstimate: '3-5 business days'
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="confirmation-container">
      <div className="success-animation">
        <CheckCircle size={80} className="success-icon" />
      </div>
      
      <h1>Thank You for Choosing Farmish!</h1>
      <p className="subtitle">Order placed successfully. We are now preparing your Farmish goodness.</p>
      <div className="order-success-message">
        <strong>Your order is confirmed!</strong>
        <span>We will send an email regarding your order and delivery updates to {orderData.email || 'your email address'}.</span>
      </div>

      <div className="order-details-card">
        <div className="order-meta">
          <div className="meta-item">
            <span className="meta-label">Order Number</span>
            <span className="meta-value">{orderNumber}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Order Date</span>
            <span className="meta-value">{formattedDate}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Payment Method</span>
            <span className="meta-value" style={{textTransform: 'uppercase'}}>{orderData.paymentMethod}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Expected Delivery</span>
            <span className="meta-value">
              {orderData.deliveryEstimate || (orderData.deliveryMethod === 'express' ? '1-2 business days' : '3-5 business days')}
            </span>
          </div>
        </div>

        <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--color-text-secondary)'}}>
          <Truck size={24} style={{color: 'var(--color-primary)'}} />
          <div>
            <strong style={{color: 'var(--color-text-primary)'}}>Delivery to:</strong>
            <p style={{marginTop: '0.25rem'}}>{orderData.address}</p>
          </div>
        </div>
      </div>

      <div className="order-actions">
        <button className="btn-track">
          <Package size={20} />
          Track My Order
        </button>
        <Link to="/shop" className="btn-continue">
          <ShoppingBag size={20} />
          Continue Shopping
        </Link>
      </div>

      <Link to="/" className="back-home">
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </div>
  );
};

export default OrderConfirmation;
