import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Blog.css';

export default function Blog() {
  useScrollAnimation();

  const posts = [
    { slug: 'benefits-of-toor-dal', title: 'Health Benefits of Toor Dal', excerpt: 'Discover why this staple is so good for you.', category: 'Nutrition', date: 'Oct 10, 2023', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&fit=crop' },
    { slug: 'farming-practices', title: 'Sustainable Farming Practices', excerpt: 'How our farmers are protecting the earth.', category: 'Farming', date: 'Sep 25, 2023', image: 'https://images.unsplash.com/photo-1595858309605-e3d81b162589?w=800&fit=crop' }
  ];

  return (
    <div className="blog-page fade-up">
      <section className="blog-hero">
        <div className="container text-center">
          <h1>From the Farm Journal</h1>
          <p>Stories, tips, and news from Farmish.</p>
        </div>
      </section>
      
      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {posts.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card-link">
                <div className="blog-card">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-card-content">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-meta">
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
