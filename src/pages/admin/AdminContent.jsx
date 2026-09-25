import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import blogs from '../../data/blogs';
import recipes from '../../data/recipes';
import './AdminContent.css';

const contentTabs = ['Blog Posts', 'Recipes', 'Farm Stories'];

export default function AdminContent() {
  const [activeTab, setActiveTab] = useState('Blog Posts');

  return (
    <div className="admin-content-page">
      <div className="admin-page-header">
        <h1>Content Management</h1>
        <button className="admin-add-btn"><Plus size={18} /> New {activeTab === 'Blog Posts' ? 'Blog Post' : activeTab === 'Recipes' ? 'Recipe' : 'Story'}</button>
      </div>
      <div className="admin-tabs">
        {contentTabs.map(tab => (
          <button key={tab} className={`admin-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Blog Posts' && (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead><tr><th>Title</th><th>Category</th><th>Author</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {blogs.map((blog, i) => (
                <tr key={blog.id}>
                  <td className="content-title">{blog.title}</td>
                  <td>{blog.category}</td>
                  <td>{blog.author}</td>
                  <td>{new Date(blog.date).toLocaleDateString()}</td>
                  <td><span className="status-badge" style={{ background: i < 6 ? '#2D6A4F20' : '#e67e2220', color: i < 6 ? '#2D6A4F' : '#e67e22' }}>{i < 6 ? 'Published' : 'Draft'}</span></td>
                  <td className="action-cell">
                    <button className="action-btn"><Pencil size={14} /></button>
                    <button className="action-btn delete"><Trash2 size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'Recipes' && (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead><tr><th>Name</th><th>Difficulty</th><th>Prep Time</th><th>Main Product</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {recipes.map(recipe => (
                <tr key={recipe.id}>
                  <td className="content-title">{recipe.name || recipe.title}</td>
                  <td><span className={`diff-badge ${(recipe.difficulty || '').toLowerCase()}`}>{recipe.difficulty}</span></td>
                  <td>{recipe.prepTime}</td>
                  <td>{recipe.mainProduct}</td>
                  <td><span className="status-badge" style={{ background: '#2D6A4F20', color: '#2D6A4F' }}>Published</span></td>
                  <td className="action-cell">
                    <button className="action-btn"><Pencil size={14} /></button>
                    <button className="action-btn delete"><Trash2 size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'Farm Stories' && (
        <div className="empty-state-box">
          <h3>Coming Soon</h3>
          <p>Farm stories section is being prepared. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
