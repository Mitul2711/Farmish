import React, { useState } from 'react';
import { Search, Eye, X } from 'lucide-react';
import './AdminCustomers.css';

const mockCustomers = [
  { id: 1, name: 'Rahul Desai', email: 'rahul@email.com', phone: '+91 98XXX XXXXX', orders: 8, totalSpent: 4520, joined: '2026-03-15', lastOrder: '2026-09-24', address: 'Ahmedabad, Gujarat' },
  { id: 2, name: 'Sneha Patel', email: 'sneha@email.com', phone: '+91 97XXX XXXXX', orders: 5, totalSpent: 2890, joined: '2026-04-20', lastOrder: '2026-09-23', address: 'Mumbai, Maharashtra' },
  { id: 3, name: 'Amit Singh', email: 'amit@email.com', phone: '+91 96XXX XXXXX', orders: 12, totalSpent: 7650, joined: '2026-01-10', lastOrder: '2026-09-22', address: 'Jaipur, Rajasthan' },
  { id: 4, name: 'Priya Kapoor', email: 'priya@email.com', phone: '+91 95XXX XXXXX', orders: 3, totalSpent: 1430, joined: '2026-06-05', lastOrder: '2026-09-21', address: 'Noida, UP' },
  { id: 5, name: 'Vikram Bhatt', email: 'vikram@email.com', phone: '+91 94XXX XXXXX', orders: 6, totalSpent: 3200, joined: '2026-02-28', lastOrder: '2026-09-20', address: 'Kolkata, WB' },
  { id: 6, name: 'Neha Joshi', email: 'neha@email.com', phone: '+91 93XXX XXXXX', orders: 9, totalSpent: 5100, joined: '2026-01-22', lastOrder: '2026-09-20', address: 'Hyderabad, Telangana' }
];

export default function AdminCustomers() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = mockCustomers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-customers">
      <div className="admin-page-header">
        <h1>Customers</h1>
        <div className="admin-search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search customers..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Orders</th><th>Total Spent</th><th>Joined</th><th>Action</th></tr></thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id}>
                <td className="customer-name">{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.orders}</td>
                <td className="order-total">₹{c.totalSpent.toLocaleString()}</td>
                <td>{c.joined}</td>
                <td><button className="action-btn" onClick={() => setSelected(c)}><Eye size={16} /> View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selected.name}</h2>
              <button onClick={() => setSelected(null)}><X size={20} /></button>
            </div>
            <div className="modal-body">
              <div className="modal-section"><h4>Email</h4><p>{selected.email}</p></div>
              <div className="modal-section"><h4>Phone</h4><p>{selected.phone}</p></div>
              <div className="modal-section"><h4>Location</h4><p>{selected.address}</p></div>
              <div className="customer-stats">
                <div className="cstat"><span className="cstat-val">{selected.orders}</span><span className="cstat-label">Orders</span></div>
                <div className="cstat"><span className="cstat-val">₹{selected.totalSpent.toLocaleString()}</span><span className="cstat-label">Total Spent</span></div>
                <div className="cstat"><span className="cstat-val">{selected.joined}</span><span className="cstat-label">Member Since</span></div>
              </div>
              <div className="modal-section"><h4>Last Order</h4><p>{selected.lastOrder}</p></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
