import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, Leaf } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { SearchContext } from '../../context/SearchContext';
import config from '../../data/config';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useContext(CartContext);
  const { isSearchOpen, openSearch, closeSearch, searchQuery, setSearchQuery, searchResults } = useContext(SearchContext);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Products', path: '/shop' },
    { name: 'Why Farmish', path: '/', hash: '#why-farmish' },
    { name: 'Farm to Home', path: '/', hash: '#farm-to-home' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <div className="logo"><Leaf size={28} /> {config.brand.name}</div>
          <span className="tagline">{config.brand.tagline}</span>
        </Link>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map(item => {
            const isActive = item.hash
              ? location.pathname === item.path && location.hash === item.hash
              : location.pathname === item.path && !location.hash;

            const handleClick = () => {
              setIsMobileMenuOpen(false);

              if (item.name === 'Home') {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 10);
              }

              if (item.hash) {
                setTimeout(() => {
                  const target = document.getElementById(item.hash.replace('#', ''));
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 40);
              }
            };

            return (
              <Link
                key={item.name}
                to={item.hash ? { pathname: item.path, hash: item.hash } : item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={handleClick}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="header-actions">
          <button className="icon-btn" onClick={isSearchOpen ? closeSearch : openSearch}>
            <Search size={20} />
          </button>
          <Link to="/admin" className="icon-btn" title="Admin Dashboard">
            <User size={20} />
          </Link>
          <Link to="/cart" className="icon-btn">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button className="icon-btn mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search products, categories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button className="close-search icon-btn" onClick={closeSearch}><X size={20} /></button>
          </div>
          {searchQuery && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(result => (
                <Link key={result.id} to={`/product/${result.slug}`} className="search-result-item" onClick={closeSearch}>
                  <img src={result.image} alt={result.name} />
                  <div>
                    <div style={{fontWeight: 600}}>{result.name}</div>
                    <div style={{fontSize: '0.8rem', color: 'var(--color-text-light)'}}>{result.category}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {searchQuery && searchResults.length === 0 && (
            <div style={{textAlign: 'center', marginTop: '16px', color: 'var(--color-text-light)'}}>No results found for "{searchQuery}"</div>
          )}
        </div>
      )}
    </header>
  );
};
export default Header;
