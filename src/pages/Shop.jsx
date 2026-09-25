import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import products from '../data/products';
import './Shop.css';

const categories = ['Dal', 'Whole Kathol', 'Premium Collection', 'Family Packs'];
const priceRanges = [
  { id: 'under-200', label: 'Under ₹200', min: 0, max: 200 },
  { id: '200-500', label: '₹200 - ₹500', min: 200, max: 500 },
  { id: 'above-500', label: '₹500+', min: 500, max: 99999 }
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [selectedCategories, setSelectedCategories] = useState(initialCategory ? [initialCategory] : []);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (initialCategory && !selectedCategories.includes(initialCategory)) {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice(null);
    setSearchParams({});
  };

  const filteredAndSortedProducts = useMemo(() => {
    if (!products || !Array.isArray(products)) return [];
    
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedPrice) {
      const range = priceRanges.find(r => r.id === selectedPrice);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price <= range.max);
      }
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (new Date(b.createdAt || 0)) - (new Date(a.createdAt || 0)));
        break;
      default:
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
    }

    return result;
  }, [selectedCategories, selectedPrice, sortBy]);

  return (
    <div className="shop-container">
      <div className="shop-hero">
        <h1>Our Kathol Collection</h1>
        <p>Discover our range of premium, sustainably farmed pulses and lentils. Perfect for your family's everyday nutrition.</p>
      </div>

      <button 
        className="mobile-filter-toggle"
        onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
      >
        <Filter size={20} />
        {isMobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
      </button>

      <div className="shop-layout">
        <aside className={`shop-sidebar ${isMobileFilterOpen ? 'open' : ''}`}>
          <div className="shop-sidebar-header">
            <h3><Filter size={20} /> Filters</h3>
            {(selectedCategories.length > 0 || selectedPrice) && (
              <button className="clear-filters" onClick={clearFilters}>Clear All</button>
            )}
          </div>

          <div className="filter-section">
            <h4>Categories</h4>
            {categories.map(cat => (
              <label key={cat} className="filter-label">
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                {cat}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h4>Price Range</h4>
            {priceRanges.map(range => (
              <label key={range.id} className="filter-label">
                <input 
                  type="radio"
                  name="price"
                  checked={selectedPrice === range.id}
                  onChange={() => setSelectedPrice(range.id)}
                />
                {range.label}
              </label>
            ))}
          </div>
        </aside>

        <main className="shop-main">
          <div className="shop-topbar">
            <div className="result-count">
              Showing {filteredAndSortedProducts.length} results
            </div>
            <div className="sort-container">
              <label htmlFor="sort">Sort by:</label>
              <select 
                id="sort" 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {filteredAndSortedProducts.length > 0 ? (
            <div className="shop-grid">
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No products found</h3>
              <p>Try adjusting your filters to find what you're looking for.</p>
              <button className="btn btn-primary" onClick={clearFilters} style={{padding: '0.75rem 1.5rem', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Clear Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
