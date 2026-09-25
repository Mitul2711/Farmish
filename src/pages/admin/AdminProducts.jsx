import React, { useState } from 'react';
import { Plus, Search, Pencil, Trash2, Upload, X } from 'lucide-react';
import './AdminProducts.css';
import productsData from '../../data/products';

const AdminProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState(productsData || []);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (p.category && p.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusBadge = (stock) => {
    let status = 'Out of Stock';
    let className = 'admin-badge-prod ';
    if (stock > 10) {
      status = 'In Stock';
      className += 'status-in-stock';
    } else if (stock > 0) {
      status = 'Low Stock';
      className += 'status-low-stock';
    } else {
      className += 'status-out-stock';
    }
    return <span className={className}>{status}</span>;
  };

  return (
    <div className="admin-products-page">
      <div className="admin-page-header">
        <h1>Products</h1>
        <button className="admin-btn-primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="admin-products-card">
        <div className="admin-toolbar">
          <div className="admin-search-bar">
            <Search size={18} className="admin-search-icon" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="admin-filters">
            <select className="admin-select">
              <option value="">All Categories</option>
              <option value="pulses">Pulses</option>
              <option value="grains">Grains</option>
              <option value="spices">Spices</option>
            </select>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product.id}>
                  <td>
                    <div className="admin-prod-thumb">
                      <img src={product.image || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=100&q=80'} alt={product.name} />
                    </div>
                  </td>
                  <td className="admin-font-medium">{product.name}</td>
                  <td>{product.category || 'Uncategorized'}</td>
                  <td>₹{product.price}</td>
                  <td>{product.stock || 0}</td>
                  <td>{getStatusBadge(product.stock || 0)}</td>
                  <td>
                    <div className="admin-action-btns">
                      <button className="admin-icon-btn edit" title="Edit"><Pencil size={16} /></button>
                      <button className="admin-icon-btn delete" title="Delete"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="7" style={{textAlign: 'center', padding: '24px', color: '#666'}}>No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h2>Add New Product</h2>
              <button className="admin-close-btn" onClick={() => setIsModalOpen(false)}><X size={20} /></button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-form-group">
                <label>Product Name</label>
                <input type="text" className="admin-input" placeholder="e.g. Organic Turmeric Powder" />
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Category</label>
                  <select className="admin-input">
                    <option>Pulses</option>
                    <option>Spices</option>
                    <option>Grains</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label>Price (₹)</label>
                  <input type="number" className="admin-input" placeholder="0.00" />
                </div>
                <div className="admin-form-group">
                  <label>Stock</label>
                  <input type="number" className="admin-input" placeholder="0" />
                </div>
              </div>
              <div className="admin-form-group">
                <label>Description</label>
                <textarea className="admin-input admin-textarea" rows="4" placeholder="Product description..."></textarea>
              </div>
              <div className="admin-form-group">
                <label>Product Image</label>
                <div className="admin-dropzone">
                  <Upload size={32} color="#999" />
                  <p>Click or drag image to upload</p>
                  <span>Recommended size: 800x800px</span>
                </div>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="admin-btn-primary">Save Product</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
