import React, { useState } from 'react';
import { Star, CheckCircle, XCircle } from 'lucide-react';
import reviews from '../../data/reviews';
import './AdminReviews.css';

const tabs = ['All', 'Pending', 'Approved', 'Rejected'];

export default function AdminReviews() {
  const [activeTab, setActiveTab] = useState('All');
  const [reviewList, setReviewList] = useState(
    reviews.map((r, i) => ({ ...r, status: i < 3 ? 'Approved' : i < 6 ? 'Pending' : 'Rejected' }))
  );

  const filtered = activeTab === 'All' ? reviewList : reviewList.filter(r => r.status === activeTab);

  const updateStatus = (id, status) => {
    setReviewList(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const statusColors = { Pending: '#e67e22', Approved: '#2D6A4F', Rejected: '#C1292E' };

  return (
    <div className="admin-reviews">
      <div className="admin-page-header">
        <h1>Reviews</h1>
      </div>
      <div className="admin-tabs">
        {tabs.map(tab => (
          <button key={tab} className={`admin-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="reviews-grid">
        {filtered.length === 0 && <p className="empty-state">No reviews in this category.</p>}
        {filtered.map(review => (
          <div key={review.id} className="admin-review-card">
            <div className="review-top">
              <div>
                <h4>{review.customerName}</h4>
                <span className="review-product">{review.productName}</span>
              </div>
              <span className="status-badge" style={{ background: statusColors[review.status] + '20', color: statusColors[review.status] }}>
                {review.status}
              </span>
            </div>
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < review.rating ? '#D4A843' : 'none'} stroke={i < review.rating ? '#D4A843' : '#ccc'} />
              ))}
            </div>
            <p className="review-text">"{review.reviewText}"</p>
            <div className="review-footer">
              <span className="review-date">{review.date}</span>
              <div className="review-actions">
                {review.status !== 'Approved' && (
                  <button className="approve-btn" onClick={() => updateStatus(review.id, 'Approved')} title="Approve">
                    <CheckCircle size={18} /> Approve
                  </button>
                )}
                {review.status !== 'Rejected' && (
                  <button className="reject-btn" onClick={() => updateStatus(review.id, 'Rejected')} title="Reject">
                    <XCircle size={18} /> Reject
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
