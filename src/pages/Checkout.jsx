import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Lock } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart = [], cartTotal = 0, clearCart } = useContext(CartContext) || {};
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    deliveryMethod: 'standard',
    paymentMethod: 'upi',
    upiId: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  useEffect(() => {
    if (!cart || cart.length === 0) {
      navigate('/shop');
    }
  }, [cart, navigate]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handlePlaceOrder = () => {
    if (clearCart) clearCart();
    navigate('/order-confirmation', { state: { orderData: formData } });
  };

  const subtotal = cartTotal || cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const deliveryFee = formData.deliveryMethod === 'express' ? 99 : (subtotal > 499 ? 0 : 49);
  const total = subtotal + deliveryFee;

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <div className="step-indicator">
          {[1, 2, 3, 4].map((step) => (
            <React.Fragment key={step}>
              <div className={`step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}>
                <div className="step-number">
                  {currentStep > step ? <Check size={14} /> : step}
                </div>
                <span>
                  {step === 1 && 'Address'}
                  {step === 2 && 'Delivery'}
                  {step === 3 && 'Payment'}
                  {step === 4 && 'Review'}
                </span>
              </div>
              {step < 4 && (
                <div className={`step-connector ${currentStep > step ? 'completed' : ''}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="checkout-layout">
        <div className="checkout-main">
          {currentStep === 1 && (
            <form onSubmit={handleNextStep}>
              <h2 className="checkout-section-title">Delivery Address</h2>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Full Name</label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input type="tel" name="mobile" pattern="[0-9]{10}" required value={formData.mobile} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group full-width">
                  <label>Complete Address</label>
                  <textarea name="address" rows="3" required value={formData.address} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" required value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <select name="state" required value={formData.state} onChange={handleChange}>
                    <option value="">Select State</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Rajasthan">Rajasthan</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input type="text" name="pincode" pattern="[0-9]{6}" required value={formData.pincode} onChange={handleChange} />
                </div>
              </div>
              <div className="checkout-actions" style={{justifyContent: 'flex-end'}}>
                <button type="submit" className="btn btn-primary" style={{padding: '0.75rem 2rem', borderRadius: '8px', border: 'none', background: 'var(--color-primary)', color: 'white', cursor: 'pointer', fontWeight: 600}}>
                  Continue to Delivery
                </button>
              </div>
            </form>
          )}

          {currentStep === 2 && (
            <form onSubmit={handleNextStep}>
              <h2 className="checkout-section-title">Delivery Method</h2>
              <div className="radio-group">
                <label className={`radio-option ${formData.deliveryMethod === 'standard' ? 'selected' : ''}`}>
                  <input type="radio" name="deliveryMethod" value="standard" checked={formData.deliveryMethod === 'standard'} onChange={handleChange} />
                  <div className="option-details">
                    <h4>Standard Delivery (3-5 business days)</h4>
                    <p>{subtotal > 499 ? 'Free' : '₹49'}</p>
                  </div>
                </label>
                <label className={`radio-option ${formData.deliveryMethod === 'express' ? 'selected' : ''}`}>
                  <input type="radio" name="deliveryMethod" value="express" checked={formData.deliveryMethod === 'express'} onChange={handleChange} />
                  <div className="option-details">
                    <h4>Express Delivery (1-2 business days)</h4>
                    <p>₹99</p>
                  </div>
                </label>
              </div>
              <div className="checkout-actions">
                <button type="button" className="btn-secondary" onClick={handlePrevStep}>Back</button>
                <button type="submit" className="btn btn-primary" style={{padding: '0.75rem 2rem', borderRadius: '8px', border: 'none', background: 'var(--color-primary)', color: 'white', cursor: 'pointer', fontWeight: 600}}>
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {currentStep === 3 && (
            <form onSubmit={handleNextStep}>
              <h2 className="checkout-section-title">Payment Method</h2>
              <div className="payment-demo-notice">
                <strong>Note:</strong> This is a demo application. No real payments will be processed.
              </div>
              <div className="radio-group">
                <label className={`radio-option ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                  <input type="radio" name="paymentMethod" value="upi" checked={formData.paymentMethod === 'upi'} onChange={handleChange} />
                  <div className="option-details" style={{width: '100%'}}>
                    <h4>UPI</h4>
                    {formData.paymentMethod === 'upi' && (
                      <div className="form-group" style={{marginTop: '1rem'}}>
                        <input type="text" name="upiId" placeholder="Enter UPI ID (e.g., name@okbank)" value={formData.upiId} onChange={handleChange} />
                      </div>
                    )}
                  </div>
                </label>
                
                <label className={`radio-option ${formData.paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} />
                  <div className="option-details" style={{width: '100%'}}>
                    <h4>Credit / Debit Card</h4>
                    {formData.paymentMethod === 'card' && (
                      <div className="form-grid" style={{marginTop: '1rem'}}>
                        <div className="form-group full-width">
                          <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="text" name="cardExpiry" placeholder="MM/YY" value={formData.cardExpiry} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="text" name="cardCvv" placeholder="CVV" value={formData.cardCvv} onChange={handleChange} />
                        </div>
                      </div>
                    )}
                  </div>
                </label>

                <label className={`radio-option ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                  <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} />
                  <div className="option-details">
                    <h4>Cash on Delivery</h4>
                    <p>Pay when your order arrives</p>
                  </div>
                </label>
              </div>
              <div className="checkout-actions">
                <button type="button" className="btn-secondary" onClick={handlePrevStep}>Back</button>
                <button type="submit" className="btn btn-primary" style={{padding: '0.75rem 2rem', borderRadius: '8px', border: 'none', background: 'var(--color-primary)', color: 'white', cursor: 'pointer', fontWeight: 600}}>
                  Review Order
                </button>
              </div>
            </form>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="checkout-section-title">Review Order</h2>
              
              <div className="review-section">
                <h4>Delivery Address</h4>
                <div className="review-content">
                  <p><strong>{formData.fullName}</strong></p>
                  <p>{formData.address}</p>
                  <p>{formData.city}, {formData.state} {formData.pincode}</p>
                  <p>Phone: {formData.mobile}</p>
                </div>
              </div>

              <div className="review-section">
                <h4>Delivery Method</h4>
                <div className="review-content">
                  <p>{formData.deliveryMethod === 'standard' ? 'Standard Delivery (3-5 business days)' : 'Express Delivery (1-2 business days)'}</p>
                </div>
              </div>

              <div className="review-section">
                <h4>Payment Method</h4>
                <div className="review-content">
                  <p style={{textTransform: 'uppercase'}}>{formData.paymentMethod}</p>
                </div>
              </div>

              <div className="checkout-actions">
                <button type="button" className="btn-secondary" onClick={handlePrevStep}>Back</button>
                <button type="button" className="btn btn-primary" onClick={handlePlaceOrder} style={{padding: '0.75rem 2rem', borderRadius: '8px', border: 'none', background: 'var(--color-primary)', color: 'white', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <Lock size={16} /> Place Order - ₹{total}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="checkout-sidebar">
          <div className="cart-summary" style={{background: 'var(--color-bg)', padding: '1.5rem', borderRadius: '12px'}}>
            <h3 style={{fontFamily: "'Playfair Display', serif", marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)'}}>Order Summary</h3>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem'}}>
              {cart.map((item, idx) => (
                <div key={idx} style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem'}}>
                  <span style={{color: 'var(--color-text-secondary)'}}>{item.quantity}x {item.product.name} ({item.size})</span>
                  <span style={{fontWeight: 600}}>₹{item.product.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div style={{borderTop: '1px solid var(--color-border)', paddingTop: '1rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--color-text-secondary)'}}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-text-secondary)'}}>
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.2rem', color: 'var(--color-text-primary)', borderTop: '1px solid var(--color-border)', paddingTop: '1rem'}}>
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
