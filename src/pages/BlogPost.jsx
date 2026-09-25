import React from 'react';
import { useParams } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  useScrollAnimation();

  return (
    <div className="blog-post-page fade-up">
      <div className="container post-container">
        <div className="post-header text-center">
          <span className="post-category">Nutrition</span>
          <h1>Health Benefits of Toor Dal</h1>
          <div className="post-meta">
            <span>By Farmish Team</span> • <span>Oct 10, 2023</span> • <span>5 min read</span>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&fit=crop" alt="Post Cover" className="post-cover" />
        <div className="post-body">
          <p>Toor dal, also known as pigeon pea, is a staple in many Indian households. But beyond its comforting taste, it packs a serious nutritional punch...</p>
          <h2>Rich in Protein</h2>
          <p>As a plant-based source of protein, it is essential for muscle building and repair.</p>
          <h2>High in Fiber</h2>
          <p>Good for digestion and keeps you feeling full longer.</p>
        </div>
        <div className="post-share">
          <strong>Share this article:</strong>
          <div className="share-buttons">
            <button className="btn btn-outline-light share-btn">Facebook</button>
            <button className="btn btn-outline-light share-btn">Twitter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
