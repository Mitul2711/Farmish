import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('farmish_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('farmish_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, selectedSize, quantity) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.selectedSize.size === selectedSize.size);
      if (existing) {
        return prev.map(item => item.product.id === product.id && item.selectedSize.size === selectedSize.size 
          ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { id: Date.now(), product, selectedSize, quantity }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) return removeFromCart(itemId);
    setCart(prev => prev.map(item => item.id === itemId ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + (item.selectedSize.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const isInCart = (productId, size) => cart.some(item => item.product.id === productId && item.selectedSize.size === size);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
