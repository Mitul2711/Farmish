import React, { useState } from 'react';
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
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <Link to="/" className="admin-logo"><Leaf size={24} /> Farmish</Link>
          <button className="admin-mobile-toggle" style={{color: 'white'}} onClick={toggleSidebar}><X size={24} /></button>
        </div>
        <nav className="admin-nav">
          {navItems.map(item => (
            <NavLink key={item.name} to={item.path} end={item.exact} className={({isActive}) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}>
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
