import React, { createContext, useState } from 'react';
import products from '../data/products';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchResults = searchQuery.trim() === '' ? [] : products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => { setIsSearchOpen(false); setSearchQuery(''); };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchResults, isSearchOpen, openSearch, closeSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
