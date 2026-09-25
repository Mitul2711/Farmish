import React from 'react';
import { TrendingUp, ShoppingBag, Users, Package, AlertTriangle, Eye, Plus, FileText, Settings } from 'lucide-react';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const stats = [
    { label: 'Total Revenue', value: '₹45,230', change: '+12%', icon: TrendingUp, color: 'green' },
    { label: 'Total Orders', value: '1,234', change: '+5%', icon: ShoppingBag, color: 'blue' },
    { label: 'Customers', value: '892', change: '+18%', icon: Users, color: 'purple' },
    { label: 'Products', value: '56', change: '+2%', icon: Package, color: 'orange' },
  ];

  const chartData = [
    { day: 'Mon', sales: 40 },
    { day: 'Tue', sales: 60 },
    { day: 'Wed', sales: 45 },
    { day: 'Thu', sales: 75 },
    { day: 'Fri', sales: 90 },
    { day: 'Sat', sales: 120 },
    { day: 'Sun', sales: 85 },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Rahul Sharma', products: 'Toor Dal, Rice', amount: '₹1,250', status: 'Processing', date: '2023-10-25' },
    { id: '#ORD-002', customer: 'Priya Patel', products: 'Turmeric Powder', amount: '₹450', status: 'Shipped', date: '2023-10-24' },
    { id: '#ORD-003', customer: 'Amit Singh', products: 'Moong Dal (2kg)', amount: '₹890', status: 'Delivered', date: '2023-10-23' },
    { id: '#ORD-004', customer: 'Sneha Gupta', products: 'Chana Dal, Jaggery', amount: '₹1,120', status: 'Processing', date: '2023-10-23' },
    { id: '#ORD-005', customer: 'Vikram Mehta', products: 'Basmati Rice (5kg)', amount: '₹2,500', status: 'Delivered', date: '2023-10-22' },
  ];

  const lowStock = [
    { name: 'Organic Toor Dal', stock: 12, id: 1 },
    { name: 'Pure Ghee', stock: 5, id: 2 },
    { name: 'Cumin Seeds', stock: 18, id: 3 },
  ];

  return (
    <div className="admin-dashboard">
      <header className="admin-header-dash">
        <div>
          <h1>Welcome back, Admin</h1>
          <p className="admin-date">{currentDate}</p>
        </div>
        <div className="admin-quick-actions-header">
          <button className="admin-btn-primary"><Plus size={16} /> Add Product</button>
        </div>
      </header>

      <section className="admin-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="admin-stat-card">
            <div className={`admin-stat-icon-wrapper ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div className="admin-stat-info">
              <h3>{stat.label}</h3>
              <div className="admin-stat-value-row">
                <span className="admin-stat-value">{stat.value}</span>
                <span className="admin-stat-change positive">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="admin-chart-section">
        <h2>Sales Overview (Last 7 Days)</h2>
        <div className="admin-chart-container">
          <div className="admin-chart-y-axis">
            <span>₹15k</span>
            <span>₹10k</span>
            <span>₹5k</span>
            <span>0</span>
          </div>
          <div className="admin-chart-bars">
            {chartData.map((data, index) => (
              <div key={index} className="admin-chart-bar-group">
                <div className="admin-chart-bar-wrapper">
                  <div 
                    className="admin-chart-bar" 
                    style={{ height: `${(data.sales / 120) * 100}%` }}
                    title={`Sales: ${data.sales}`}
                  ></div>
                </div>
                <span className="admin-chart-x-label">{data.day}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="admin-dashboard-bottom">
        <section className="admin-recent-orders">
          <div className="admin-section-header">
            <h2>Recent Orders</h2>
            <Link to="/admin/orders" className="admin-view-all">View All</Link>
          </div>
          <div className="admin-table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Products</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.products}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`admin-badge status-${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="admin-sidebar-widgets">
          <div className="admin-widget admin-low-stock">
            <div className="admin-widget-header">
              <h2>Low Stock Alerts</h2>
              <AlertTriangle className="admin-warning-icon" size={20} />
            </div>
            <ul className="admin-low-stock-list">
              {lowStock.map(item => (
                <li key={item.id}>
                  <div className="admin-stock-info">
                    <h4>{item.name}</h4>
                    <span className="admin-stock-count">{item.stock} left</span>
                  </div>
                  <button className="admin-btn-outline-sm">Restock</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="admin-widget admin-quick-links">
            <h2>Quick Actions</h2>
            <div className="admin-quick-links-grid">
              <Link to="/admin/products" className="admin-quick-link-btn">
                <Package size={20} />
                <span>Manage Products</span>
              </Link>
              <Link to="/admin/orders" className="admin-quick-link-btn">
                <ShoppingBag size={20} />
                <span>View Orders</span>
              </Link>
              <Link to="/admin/content" className="admin-quick-link-btn">
                <FileText size={20} />
                <span>Manage Content</span>
              </Link>
              <Link to="/admin/settings" className="admin-quick-link-btn">
                <Settings size={20} />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
