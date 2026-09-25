import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import './AdminOrders.css';

const mockOrders = [
  { id: 'FM-10021', customer: 'Rahul Desai', email: 'rahul@email.com', phone: '+91 98XXX XXXXX', products: [{ name: 'Premium Toor Dal', size: '1kg', qty: 2, price: 279 }, { name: 'Kashmiri Rajma', size: '500g', qty: 1, price: 185 }], total: 743, payment: 'UPI', status: 'Processing', date: '2026-09-24', address: '12 Green Park, Ahmedabad, Gujarat 380015' },
  { id: 'FM-10020', customer: 'Sneha Patel', email: 'sneha@email.com', phone: '+91 97XXX XXXXX', products: [{ name: 'Yellow Moong Dal', size: '2kg', qty: 1, price: 499 }], total: 499, payment: 'Card', status: 'Shipped', date: '2026-09-23', address: '45 MG Road, Mumbai, Maharashtra 400001' },
  { id: 'FM-10019', customer: 'Amit Singh', email: 'amit@email.com', phone: '+91 96XXX XXXXX', products: [{ name: 'Kala Chana', size: '1kg', qty: 3, price: 235 }], total: 705, payment: 'COD', status: 'Delivered', date: '2026-09-22', address: '78 Civil Lines, Jaipur, Rajasthan 302001' },
  { id: 'FM-10018', customer: 'Priya Kapoor', email: 'priya@email.com', phone: '+91 95XXX XXXXX', products: [{ name: 'Bengal Gram Dal', size: '500g', qty: 2, price: 119 }, { name: 'Red Masoor Dal', size: '1kg', qty: 1, price: 239 }], total: 477, payment: 'UPI', status: 'Delivered', date: '2026-09-21', address: '34 Sector 15, Noida, UP 201301' },
  { id: 'FM-10017', customer: 'Vikram Bhatt', email: 'vikram@email.com', phone: '+91 94XXX XXXXX', products: [{ name: 'Panchratna Dal Mix', size: '1kg', qty: 1, price: 295 }], total: 295, payment: 'Net Banking', status: 'Cancelled', date: '2026-09-20', address: '12 Park Street, Kolkata, WB 700016' },
  { id: 'FM-10016', customer: 'Neha Joshi', email: 'neha@email.com', phone: '+91 93XXX XXXXX', products: [{ name: 'White Urad Dal', size: '1kg', qty: 2, price: 299 }, { name: 'Whole Green Moong', size: '500g', qty: 1, price: 145 }], total: 743, payment: 'UPI', status: 'Processing', date: '2026-09-20', address: '67 Banjara Hills, Hyderabad, TS 500034' },
  { id: 'FM-10015', customer: 'Meera Tiwari', email: 'meera@email.com', phone: '+91 92XXX XXXXX', products: [{ name: 'Kabuli Chana', size: '1kg', qty: 2, price: 315 }], total: 630, payment: 'Card', status: 'Shipped', date: '2026-09-19', address: '89 Indira Nagar, Bangalore, KA 560038' },
  { id: 'FM-10014', customer: 'Ravi Menon', email: 'ravi@email.com', phone: '+91 91XXX XXXXX', products: [{ name: 'Premium Toor Dal', size: '5kg', qty: 1, price: 1249 }], total: 1249, payment: 'COD', status: 'Delivered', date: '2026-09-18', address: '23 MG Road, Kochi, Kerala 682001' }
];

const statusColors = { Processing: '#e67e22', Shipped: '#3498db', Delivered: '#2D6A4F', Cancelled: '#C1292E' };
const tabs = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

export default function AdminOrders() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filtered = activeTab === 'All' ? mockOrders : mockOrders.filter(o => o.status === activeTab);

  return (
    <div className="admin-orders">
      <div className="admin-page-header">
        <h1>Orders</h1>
      </div>
      <div className="admin-tabs">
        {tabs.map(tab => (
          <button key={tab} className={`admin-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab} {tab !== 'All' && <span className="tab-count">{mockOrders.filter(o => tab === 'All' || o.status === tab).length}</span>}
          </button>
        ))}
      </div>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead><tr><th>Order ID</th><th>Customer</th><th>Products</th><th>Total</th><th>Payment</th><th>Status</th><th>Date</th><th>Action</th></tr></thead>
          <tbody>
            {filtered.map(order => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.products.length} item{order.products.length > 1 ? 's' : ''}</td>
                <td className="order-total">₹{order.total}</td>
                <td>{order.payment}</td>
                <td><span className="status-badge" style={{ background: statusColors[order.status] + '20', color: statusColors[order.status] }}>{order.status}</span></td>
                <td>{order.date}</td>
                <td><button className="action-btn" onClick={() => setSelectedOrder(order)}><Eye size={16} /> View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Order {selectedOrder.id}</h2>
              <button onClick={() => setSelectedOrder(null)}><X size={20} /></button>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h4>Customer</h4>
                <p>{selectedOrder.customer}</p>
                <p style={{color: '#666'}}>{selectedOrder.email} • {selectedOrder.phone}</p>
              </div>
              <div className="modal-section">
                <h4>Delivery Address</h4>
                <p>{selectedOrder.address}</p>
              </div>
              <div className="modal-section">
                <h4>Items</h4>
                {selectedOrder.products.map((p, i) => (
                  <div key={i} className="modal-item">
                    <span>{p.name} ({p.size}) × {p.qty}</span>
                    <span>₹{p.price * p.qty}</span>
                  </div>
                ))}
                <div className="modal-item" style={{fontWeight: 700, borderTop: '2px solid #eee', paddingTop: '8px', marginTop: '8px'}}>
                  <span>Total</span><span>₹{selectedOrder.total}</span>
                </div>
              </div>
              <div className="modal-section">
                <h4>Status</h4>
                <select defaultValue={selectedOrder.status} className="status-select">
                  {['Processing', 'Shipped', 'Delivered', 'Cancelled'].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
