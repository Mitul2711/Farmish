const fs = require('fs');
const path = require('path');

const write = (file, content) => {
  fs.writeFileSync(path.join(__dirname, file), content, 'utf8');
};

write('src/components/layout/Header.css', `.header { position: sticky; top: 0; left: 0; right: 0; background: rgba(254, 252, 243, 0.9); backdrop-filter: blur(10px); border-bottom: 1px solid var(--color-border); z-index: var(--z-sticky); transition: var(--transition-normal); }
.header-container { display: flex; align-items: center; justify-content: space-between; height: 80px; padding: 0 var(--spacing-24); max-width: 1200px; margin: 0 auto; }
.logo-container { display: flex; flex-direction: column; text-decoration: none; }
.logo { display: flex; align-items: center; gap: var(--spacing-8); font-family: var(--font-heading); font-size: 1.75rem; font-weight: 700; color: var(--color-primary); }
.tagline { font-size: 0.75rem; color: var(--color-secondary); letter-spacing: 0.05em; text-transform: uppercase; margin-top: -2px; }
.nav-links { display: flex; gap: var(--spacing-32); align-items: center; }
.nav-link { font-weight: 500; color: var(--color-text-primary); transition: var(--transition-fast); position: relative; }
.nav-link:hover, .nav-link.active { color: var(--color-primary); }
.nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--color-primary); transition: var(--transition-normal); }
.nav-link.active::after, .nav-link:hover::after { width: 100%; }
.header-actions { display: flex; align-items: center; gap: var(--spacing-16); }
.icon-btn { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; color: var(--color-text-primary); transition: var(--transition-fast); position: relative; }
.icon-btn:hover { background: var(--color-bg-alt); color: var(--color-primary); }
.cart-badge { position: absolute; top: 0; right: 0; background: var(--color-accent); color: white; font-size: 0.75rem; font-weight: 700; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.mobile-menu-btn { display: none; }
.search-overlay { position: absolute; top: 100%; left: 0; right: 0; background: var(--color-surface); padding: var(--spacing-24); box-shadow: var(--shadow-md); border-bottom: 1px solid var(--color-border); transform-origin: top; animation: slideDown 0.3s ease-out; }
.search-input-wrapper { max-width: 600px; margin: 0 auto; position: relative; display: flex; align-items: center; }
.search-input { width: 100%; padding: var(--spacing-16) var(--spacing-48) var(--spacing-16) var(--spacing-16); border: 1px solid var(--color-border); border-radius: var(--radius-full); font-size: 1rem; outline: none; }
.search-input:focus { border-color: var(--color-primary); box-shadow: 0 0 0 2px var(--color-primary-lightest); }
.close-search { position: absolute; right: var(--spacing-16); color: var(--color-text-light); }
.close-search:hover { color: var(--color-error); }
.search-results { max-width: 600px; margin: var(--spacing-16) auto 0; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); max-height: 300px; overflow-y: auto; }
.search-result-item { display: flex; align-items: center; gap: var(--spacing-12); padding: var(--spacing-12); border-bottom: 1px solid var(--color-border); text-decoration: none; color: var(--color-text-primary); }
.search-result-item:last-child { border-bottom: none; }
.search-result-item:hover { background: var(--color-bg-alt); }
.search-result-item img { width: 40px; height: 40px; border-radius: var(--radius-sm); object-fit: cover; }
@media (max-width: 768px) {
  .nav-links { display: none; flex-direction: column; position: absolute; top: 80px; left: 0; right: 0; background: var(--color-surface); padding: var(--spacing-24); border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-md); }
  .nav-links.open { display: flex; }
  .mobile-menu-btn { display: flex; }
  .tagline { display: none; }
}
`);

write('src/components/layout/Header.jsx', `import React, { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, Leaf } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { SearchContext } from '../../context/SearchContext';
import config from '../../data/config';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useContext(CartContext);
  const { isSearchOpen, openSearch, closeSearch, searchQuery, setSearchQuery, searchResults } = useContext(SearchContext);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Products', path: '/shop' },
    { name: 'Why Farmish', path: '/#why-farmish' },
    { name: 'Farm to Home', path: '/#farm-to-home' },
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
        
        <nav className={\`nav-links \${isMobileMenuOpen ? 'open' : ''}\`}>
          {navItems.map(item => (
            item.path.startsWith('/#') ? 
            <a key={item.name} href={item.path} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{item.name}</a> :
            <NavLink key={item.name} to={item.path} className={({isActive}) => \`nav-link \${isActive ? 'active' : ''}\`} onClick={() => setIsMobileMenuOpen(false)}>{item.name}</NavLink>
          ))}
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
                <Link key={result.id} to={\`/product/\${result.slug}\`} className="search-result-item" onClick={closeSearch}>
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
`);

write('src/components/layout/Footer.css', `.footer { background-color: var(--color-primary-dark); color: var(--color-bg); padding: var(--spacing-80) 0 var(--spacing-24); margin-top: auto; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: var(--spacing-48); margin-bottom: var(--spacing-64); }
.footer-brand .logo { display: flex; align-items: center; gap: var(--spacing-8); font-family: var(--font-heading); font-size: 2rem; font-weight: 700; color: white; margin-bottom: var(--spacing-8); }
.footer-brand p { color: var(--color-bg-alt); opacity: 0.8; margin-bottom: var(--spacing-24); max-width: 300px; }
.social-icons { display: flex; gap: var(--spacing-16); }
.social-icon { width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: white; transition: var(--transition-fast); }
.social-icon:hover { background: var(--color-accent); transform: translateY(-3px); }
.footer-col h4 { color: white; margin-bottom: var(--spacing-24); font-size: 1.25rem; }
.footer-col ul { display: flex; flex-direction: column; gap: var(--spacing-12); }
.footer-col a { color: var(--color-bg-alt); opacity: 0.8; transition: var(--transition-fast); }
.footer-col a:hover { color: var(--color-accent); opacity: 1; padding-left: 4px; }
.newsletter-form { display: flex; margin-top: var(--spacing-16); }
.newsletter-input { flex: 1; padding: var(--spacing-12) var(--spacing-16); border: none; border-radius: var(--radius-sm) 0 0 var(--radius-sm); outline: none; }
.newsletter-btn { background: var(--color-accent); color: white; padding: 0 var(--spacing-16); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-weight: 600; }
.newsletter-btn:hover { background: var(--color-accent-light); }
.footer-bottom { text-align: center; padding-top: var(--spacing-24); border-top: 1px solid rgba(255,255,255,0.1); color: var(--color-bg-alt); opacity: 0.6; font-size: 0.875rem; }
@media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr; gap: var(--spacing-32); } }
`);

write('src/components/layout/Footer.jsx', `import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Youtube, Phone } from 'lucide-react';
import config from '../../data/config';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo"><Leaf /> {config.brand.name}</Link>
            <p>{config.brand.tagline}</p>
            <div className="social-icons">
              <a href={config.social.instagram} className="social-icon"><Instagram size={20} /></a>
              <a href={config.social.facebook} className="social-icon"><Facebook size={20} /></a>
              <a href={config.social.youtube} className="social-icon"><Youtube size={20} /></a>
              <a href={config.social.whatsapp} className="social-icon"><Phone size={20} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/shop">All Products</Link></li>
              <li><Link to="/shop?category=dal">Dal</Link></li>
              <li><Link to="/shop?category=whole-kathol">Whole Kathol</Link></li>
              <li><Link to="/shop?category=premium-collection">Premium Collection</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Customer Support</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/return-policy">Return Policy</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Join Our Newsletter</h4>
            <p style={{color: 'var(--color-bg-alt)', opacity: 0.8, marginBottom: '12px'}}>Get updates on new products and recipes.</p>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} {config.brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
`);

write('src/components/layout/WhatsAppButton.css', `.whatsapp-btn { position: fixed; bottom: 24px; right: 24px; width: 60px; height: 60px; background-color: #25D366; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-lg); z-index: var(--z-overlay); transition: var(--transition-normal); animation: pulse 2s infinite; text-decoration: none; }
.whatsapp-btn:hover { transform: scale(1.1); box-shadow: 0 12px 20px -5px rgba(37, 211, 102, 0.4); animation: none; }
`);

write('src/components/layout/WhatsAppButton.jsx', `import React from 'react';
import { MessageCircle } from 'lucide-react';
import config from '../../data/config';
import './WhatsAppButton.css';
import { useLocation } from 'react-router-dom';

const WhatsAppButton = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <a href={\`https://wa.me/\${config.contact.whatsapp.replace(/[^0-9]/g, '')}\`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn" title="Chat with us on WhatsApp">
      <MessageCircle size={32} />
    </a>
  );
};
export default WhatsAppButton;
`);

write('src/components/layout/Layout.jsx', `import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <main style={{flex: 1}}>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
export default Layout;
`);

write('src/components/layout/AdminLayout.css', `.admin-layout { display: flex; min-height: 100vh; background-color: #f4f6f8; }
.admin-sidebar { width: 250px; background-color: #1a1a2e; color: white; display: flex; flex-direction: column; transition: var(--transition-normal); position: fixed; height: 100vh; left: 0; top: 0; z-index: var(--z-sticky); }
.admin-sidebar-header { padding: var(--spacing-24); border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: space-between; }
.admin-logo { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: white; text-decoration: none; display: flex; align-items: center; gap: var(--spacing-8); }
.admin-nav { padding: var(--spacing-16) 0; flex: 1; }
.admin-nav-item { display: flex; align-items: center; gap: var(--spacing-12); padding: var(--spacing-12) var(--spacing-24); color: rgba(255,255,255,0.7); text-decoration: none; transition: var(--transition-fast); }
.admin-nav-item:hover, .admin-nav-item.active { background-color: rgba(255,255,255,0.1); color: white; border-left: 4px solid var(--color-primary-lightest); }
.admin-main { flex: 1; margin-left: 250px; display: flex; flex-direction: column; min-width: 0; transition: var(--transition-normal); }
.admin-topbar { height: 70px; background: white; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; padding: 0 var(--spacing-24); position: sticky; top: 0; z-index: var(--z-above); }
.admin-content { padding: var(--spacing-24); flex: 1; overflow-y: auto; }
.admin-mobile-toggle { display: none; color: var(--color-text-primary); }
@media (max-width: 768px) {
  .admin-sidebar { transform: translateX(-100%); }
  .admin-sidebar.open { transform: translateX(0); }
  .admin-main { margin-left: 0; }
  .admin-mobile-toggle { display: block; }
}
`);

write('src/components/layout/AdminLayout.jsx', `import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Users, Star, FileText, Bell, User, Menu, X, Leaf } from 'lucide-react';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} />, exact: true },
    { name: 'Products', path: '/admin/products', icon: <Package size={20} /> },
    { name: 'Orders', path: '/admin/orders', icon: <ShoppingCart size={20} /> },
    { name: 'Customers', path: '/admin/customers', icon: <Users size={20} /> },
    { name: 'Reviews', path: '/admin/reviews', icon: <Star size={20} /> },
    { name: 'Content', path: '/admin/content', icon: <FileText size={20} /> }
  ];

  return (
    <div className="admin-layout">
      <aside className={\`admin-sidebar \${sidebarOpen ? 'open' : ''}\`}>
        <div className="admin-sidebar-header">
          <Link to="/" className="admin-logo"><Leaf size={24} /> Farmish</Link>
          <button className="admin-mobile-toggle" style={{color: 'white'}} onClick={toggleSidebar}><X size={24} /></button>
        </div>
        <nav className="admin-nav">
          {navItems.map(item => (
            <NavLink key={item.name} to={item.path} end={item.exact} className={({isActive}) => \`admin-nav-item \${isActive ? 'active' : ''}\`} onClick={() => setSidebarOpen(false)}>
              {item.icon} {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
      
      <main className="admin-main">
        <header className="admin-topbar">
          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <button className="admin-mobile-toggle icon-btn" onClick={toggleSidebar}><Menu size={24} /></button>
            <h2 style={{fontSize: '1.25rem', margin: 0}}>Admin Panel</h2>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <button className="icon-btn"><Bell size={20} /></button>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
              <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <User size={20} />
              </div>
            </div>
          </div>
        </header>
        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
};
export default AdminLayout;
`);

write('src/components/ui/Toast.css', `.toast-container { position: fixed; top: 24px; right: 24px; z-index: var(--z-toast); display: flex; flex-direction: column; gap: var(--spacing-12); }
.toast { display: flex; align-items: center; justify-content: space-between; padding: var(--spacing-12) var(--spacing-16); border-radius: var(--radius-md); box-shadow: var(--shadow-lg); min-width: 300px; color: white; animation: slideInRight 0.3s ease-out; }
.toast.success { background-color: var(--color-success); }
.toast.error { background-color: var(--color-error); }
.toast.info { background-color: var(--color-secondary); }
.toast-content { display: flex; align-items: center; gap: var(--spacing-12); }
.toast-close { background: none; border: none; color: white; cursor: pointer; opacity: 0.8; }
.toast-close:hover { opacity: 1; }
@keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
`);

write('src/components/ui/Toast.jsx', `import React, { createContext, useState, useCallback, useContext } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import './Toast.css';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={\`toast \${toast.type}\`}>
            <div className="toast-content">
              {toast.type === 'success' && <CheckCircle size={20} />}
              {toast.type === 'error' && <AlertCircle size={20} />}
              {toast.type === 'info' && <Info size={20} />}
              <span>{toast.message}</span>
            </div>
            <button className="toast-close" onClick={() => removeToast(toast.id)}><X size={16} /></button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
`);

write('src/components/ui/ProductCard.css', `.product-card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border); overflow: hidden; transition: var(--transition-normal); display: flex; flex-direction: column; position: relative; height: 100%; }
.product-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--color-primary-light); }
.product-badges { position: absolute; top: 12px; left: 12px; display: flex; flex-direction: column; gap: 4px; z-index: 2; }
.badge { padding: 4px 8px; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: white; }
.badge-new { background: var(--color-accent); }
.badge-bestseller { background: var(--color-primary); }
.badge-discount { position: absolute; top: 12px; right: 12px; background: var(--color-error); color: white; padding: 4px 8px; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700; z-index: 2; }
.product-image-container { position: relative; padding-top: 100%; overflow: hidden; background: #f9f9f9; }
.product-image-container img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.product-card:hover .product-image-container img { transform: scale(1.05); }
.product-info { padding: var(--spacing-16); display: flex; flex-direction: column; flex: 1; }
.product-category { font-size: 0.75rem; color: var(--color-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
.product-title { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 600; margin-bottom: 4px; color: var(--color-text-primary); text-decoration: none; }
.product-title:hover { color: var(--color-primary); }
.product-desc { font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.product-rating { display: flex; align-items: center; gap: 4px; margin-bottom: 12px; font-size: 0.875rem; color: var(--color-text-secondary); }
.star-icon { color: var(--color-accent); fill: var(--color-accent); }
.product-price-row { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
.product-price { font-size: 1.25rem; font-weight: 700; color: var(--color-primary); }
.product-original-price { text-decoration: line-through; color: var(--color-text-light); font-size: 0.875rem; }
.pack-selector { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; margin-top: auto; }
.pack-pill { padding: 4px 12px; border: 1px solid var(--color-border); border-radius: var(--radius-full); font-size: 0.75rem; cursor: pointer; transition: var(--transition-fast); background: var(--color-surface); }
.pack-pill.selected { background: var(--color-primary); color: white; border-color: var(--color-primary); }
.add-to-cart-btn { width: 100%; padding: 12px; background: var(--color-bg-alt); color: var(--color-primary); border: none; border-radius: var(--radius-full); font-weight: 600; cursor: pointer; transition: var(--transition-fast); display: flex; align-items: center; justify-content: center; gap: 8px; }
.add-to-cart-btn:hover { background: var(--color-primary); color: white; }
`);

write('src/components/ui/ProductCard.jsx', `import React, { useState, useContext } from 'react';
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
    showToast(\`Added \${product.name} (\${selectedSize.size}) to cart\`, 'success');
  };

  return (
    <div className="product-card">
      <div className="product-badges">
        {product.isNew && <span className="badge badge-new">New</span>}
        {product.isBestseller && <span className="badge badge-bestseller">Bestseller</span>}
      </div>
      {product.discount && <div className="badge-discount">{product.discount}% OFF</div>}
      
      <Link to={\`/product/\${product.slug}\`} className="product-image-container">
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={\`/product/\${product.slug}\`} className="product-title">{product.name}</Link>
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
              className={\`pack-pill \${selectedSize.size === pack.size ? 'selected' : ''}\`}
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
`);

// Delete default css files
try {
  fs.unlinkSync(path.join(__dirname, 'src/App.css'));
  fs.unlinkSync(path.join(__dirname, 'src/index.css'));
} catch (e) {
  // Ignore if they don't exist
}

console.log('Components written successfully.');
