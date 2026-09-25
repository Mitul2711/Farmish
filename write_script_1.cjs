const fs = require('fs');
const path = require('path');

const write = (file, content) => {
  fs.writeFileSync(path.join(__dirname, file), content, 'utf8');
};

write('src/data/config.js', `const config = {
  brand: { name: 'Farmish', tagline: 'From Our Farms to Your Family' },
  contact: { phone: '+91 XXXXX XXXXX', email: 'hello@farmish.in', address: 'Farmish HQ, India', whatsapp: '+91XXXXXXXXXX', hours: 'Mon-Sat: 9AM - 6PM' },
  social: { instagram: '#', facebook: '#', youtube: '#', whatsapp: '#' },
  delivery: { freeAbove: 499, standardDays: '3-5', expressDays: '1-2' }
};
export default config;
`);

write('src/data/products.js', `export const products = [
  {
    id: 1, slug: 'toor-dal', name: 'Premium Toor Dal', category: 'Dal', categorySlug: 'dal',
    shortDesc: 'Unpolished split pigeon peas',
    description: 'High quality, unpolished toor dal directly sourced from trusted farms. Rich in protein and essential nutrients.',
    price: 149, originalPrice: 199, discount: 25,
    rating: 4.8, reviewCount: 124, image: '/images/toor-dal.png',
    packSizes: [{size: '500g', price: 149}, {size: '1kg', price: 279}, {size: '2kg', price: 529}, {size: '5kg', price: 1249}],
    nutrition: { calories: 343, protein: 22, carbs: 63, fiber: 15, fat: 1.5 },
    ingredients: '100% Unpolished Toor Dal',
    cookingInfo: 'Soak for 30 mins before cooking. Cook in pressure cooker for 3-4 whistles.',
    storageInfo: 'Store in a cool, dry place in an airtight container.',
    origin: 'Gujarat, India', tags: ['bestseller', 'protein', 'unpolished'],
    inStock: true, isNew: false, isBestseller: true
  },
  {
    id: 2, slug: 'moong-dal', name: 'Yellow Moong Dal', category: 'Dal', categorySlug: 'dal',
    shortDesc: 'Split and skinned green gram',
    description: 'Easily digestible yellow moong dal. Perfect for khichdi and everyday meals.',
    price: 139, originalPrice: 169, discount: null,
    rating: 4.6, reviewCount: 98, image: '/images/moong-dal.png',
    packSizes: [{size: '500g', price: 139}, {size: '1kg', price: 259}, {size: '2kg', price: 499}],
    nutrition: { calories: 347, protein: 24, carbs: 63, fiber: 16, fat: 1.2 },
    ingredients: '100% Split Yellow Moong Dal',
    cookingInfo: 'No soaking required. Cooks fast.',
    storageInfo: 'Store in a cool, dry place.',
    origin: 'Maharashtra, India', tags: ['easy-digest', 'khichdi'],
    inStock: true, isNew: false, isBestseller: false
  },
  {
    id: 3, slug: 'chana-dal', name: 'Bengal Gram Dal', category: 'Dal', categorySlug: 'dal',
    shortDesc: 'Split bengal gram (Chana Dal)',
    description: 'Premium quality chana dal with a sweet and nutty flavor. Great for curries and sweets.',
    price: 119, originalPrice: 149, discount: 20,
    rating: 4.7, reviewCount: 85, image: '/images/chana-dal.png',
    packSizes: [{size: '500g', price: 119}, {size: '1kg', price: 219}, {size: '2kg', price: 419}],
    nutrition: { calories: 364, protein: 22, carbs: 61, fiber: 15, fat: 5 },
    ingredients: '100% Unpolished Chana Dal',
    cookingInfo: 'Soak for 1 hour for best results.',
    storageInfo: 'Store in airtight container.',
    origin: 'Madhya Pradesh, India', tags: ['nutty', 'curry'],
    inStock: true, isNew: true, isBestseller: false
  },
  {
    id: 4, slug: 'masoor-dal', name: 'Red Masoor Dal', category: 'Dal', categorySlug: 'dal',
    shortDesc: 'Split red lentils',
    description: 'Quick cooking split red lentils. Earthy flavor and creamy texture.',
    price: 129, originalPrice: 159, discount: 18,
    rating: 4.5, reviewCount: 65, image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&h=400&fit=crop',
    packSizes: [{size: '500g', price: 129}, {size: '1kg', price: 239}],
    nutrition: { calories: 353, protein: 25, carbs: 60, fiber: 11, fat: 1 },
    ingredients: '100% Split Red Masoor Dal',
    cookingInfo: 'Cooks quickly without soaking.',
    storageInfo: 'Store in dry place.',
    origin: 'Uttar Pradesh, India', tags: ['quick-cook', 'creamy'],
    inStock: true, isNew: false, isBestseller: false
  },
  {
    id: 5, slug: 'urad-dal', name: 'White Urad Dal', category: 'Dal', categorySlug: 'dal',
    shortDesc: 'Split and skinned black gram',
    description: 'Essential for making idlis and dosas. High in protein.',
    price: 159, originalPrice: 199, discount: 20,
    rating: 4.9, reviewCount: 150, image: 'https://images.unsplash.com/photo-1589131662999-4c8d9e68b3dc?w=400&h=400&fit=crop',
    packSizes: [{size: '500g', price: 159}, {size: '1kg', price: 299}],
    nutrition: { calories: 341, protein: 25, carbs: 59, fiber: 18, fat: 1.6 },
    ingredients: '100% Urad Dal (White)',
    cookingInfo: 'Soak for 4-6 hours before grinding for batter.',
    storageInfo: 'Keep dry.',
    origin: 'Andhra Pradesh, India', tags: ['dosa', 'idli', 'bestseller'],
    inStock: true, isNew: false, isBestseller: true
  },
  {
    id: 6, slug: 'green-moong', name: 'Whole Green Moong', category: 'Whole Kathol', categorySlug: 'whole-kathol',
    shortDesc: 'Whole green gram',
    description: 'Nutrient-rich whole green moong, perfect for sprouting or making robust curries.',
    price: 145, originalPrice: 180, discount: null,
    rating: 4.6, reviewCount: 77, image: 'https://images.unsplash.com/photo-1627471168233-6a9b9aeb6e28?w=400&h=400&fit=crop',
    packSizes: [{size: '500g', price: 145}, {size: '1kg', price: 275}],
    nutrition: { calories: 347, protein: 24, carbs: 63, fiber: 16, fat: 1.2 },
    ingredients: '100% Whole Green Moong',
    cookingInfo: 'Soak overnight for sprouting or boiling.',
    storageInfo: 'Store in airtight container.',
    origin: 'Maharashtra, India', tags: ['sprouts', 'healthy'],
    inStock: true, isNew: false, isBestseller: false
  },
  {
    id: 7, slug: 'black-chana', name: 'Kala Chana', category: 'Whole Kathol', categorySlug: 'whole-kathol',
    shortDesc: 'Black chickpeas',
    description: 'High-fiber black chickpeas with an earthy flavor.',
    price: 125, originalPrice: 150, discount: 15,
    rating: 4.7, reviewCount: 112, image: 'https://images.unsplash.com/photo-1558238686-21dcbd21eec4?w=400&h=400&fit=crop',
    packSizes: [{size: '500g', price: 125}, {size: '1kg', price: 235}],
    nutrition: { calories: 364, protein: 19, carbs: 61, fiber: 17, fat: 6 },
    ingredients: '100% Black Chana',
    cookingInfo: 'Soak overnight before boiling.',
    storageInfo: 'Keep in dry place.',
    origin: 'Rajasthan, India', tags: ['protein', 'fiber'],
    inStock: true, isNew: false, isBestseller: true
  },
  {
    id: 8, slug: 'white-chana', name: 'Kabuli Chana', category: 'Whole Kathol', categorySlug: 'whole-kathol',
    shortDesc: 'White chickpeas (Garbanzo beans)',
    description: 'Large, premium quality white chickpeas, ideal for chole.',
    price: 165, originalPrice: 200, discount: 17,
    rating: 4.8, reviewCount: 134, image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&h=400&fit=crop',
    packSizes: [{size: '500g', price: 165}, {size: '1kg', price: 315}],
    nutrition: { calories: 364, protein: 19, carbs: 61, fiber: 17, fat: 6 },
    ingredients: '100% Kabuli Chana',
    cookingInfo: 'Soak overnight. Boil with tea leaves for dark color in chole.',
    storageInfo: 'Store in cool, dry place.',
    origin: 'Punjab, India', tags: ['chole', 'premium'],
    inStock: true, isNew: false, isBestseller: true
  },
  {
    id: 9, slug: 'rajma', name: 'Kashmiri Rajma', category: 'Whole Kathol', categorySlug: 'whole-kathol',
    shortDesc: 'Red kidney beans',
    description: 'Deep red, flavorful Kashmiri rajma that cooks to a creamy consistency.',
    price: 185, originalPrice: 220, discount: null,
    rating: 4.9, reviewCount: 201, image: 'https://images.unsplash.com/photo-1558238686-21dcbd21eec4?w=400&h=400&fit=crop',
    packSizes: [{size: '500g', price: 185}, {size: '1kg', price: 350}],
    nutrition: { calories: 333, protein: 24, carbs: 60, fiber: 25, fat: 1 },
    ingredients: '100% Kashmiri Rajma',
    cookingInfo: 'Soak overnight. Pressure cook for 4-5 whistles.',
    storageInfo: 'Store in airtight container.',
    origin: 'Kashmir, India', tags: ['rajma', 'premium'],
    inStock: true, isNew: true, isBestseller: true
  },
  {
    id: 10, slug: 'mixed-dal', name: 'Panchratna Dal Mix', category: 'Premium Collection', categorySlug: 'premium-collection',
    shortDesc: 'Blend of 5 premium dals',
    description: 'A perfect nutritional blend of Toor, Moong, Chana, Masoor, and Urad dal.',
    price: 155, originalPrice: 190, discount: 18,
    rating: 4.6, reviewCount: 54, image: 'https://images.unsplash.com/photo-1589131662999-4c8d9e68b3dc?w=400&h=400&fit=crop',
    packSizes: [{size: '500g', price: 155}, {size: '1kg', price: 295}],
    nutrition: { calories: 345, protein: 23, carbs: 62, fiber: 15, fat: 2 },
    ingredients: 'Toor, Moong, Chana, Masoor, Urad (Equal Proportions)',
    cookingInfo: 'Soak for 30 mins before cooking.',
    storageInfo: 'Keep in dry place.',
    origin: 'India', tags: ['mix', 'nutrition'],
    inStock: true, isNew: true, isBestseller: false
  }
];
export default products;
`);

write('src/data/categories.js', `export const categories = [
  { id: 1, slug: 'dal', name: 'Dal', description: 'Split pulses for your everyday meals', image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&h=400&fit=crop', productCount: 5 },
  { id: 2, slug: 'whole-kathol', name: 'Whole Kathol', description: 'Nutritious whole beans and grams', image: 'https://images.unsplash.com/photo-1558238686-21dcbd21eec4?w=400&h=400&fit=crop', productCount: 4 },
  { id: 3, slug: 'premium-collection', name: 'Premium Collection', description: 'Specially sourced premium varieties', image: 'https://images.unsplash.com/photo-1627471168233-6a9b9aeb6e28?w=400&h=400&fit=crop', productCount: 1 },
  { id: 4, slug: 'family-packs', name: 'Family Packs', description: 'Bulk packs for the whole family', image: 'https://images.unsplash.com/photo-1589131662999-4c8d9e68b3dc?w=400&h=400&fit=crop', productCount: 10 }
];
export default categories;
`);

write('src/data/recipes.js', `export const recipes = [
  {
    id: 1, slug: 'gujarati-dal', name: 'Classic Gujarati Dal',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&fit=crop',
    prepTime: '15 mins', cookTime: '30 mins', difficulty: 'Easy', servings: 4,
    mainProduct: 'Premium Toor Dal', productSlug: 'toor-dal',
    ingredients: ['1 cup Farmish Toor Dal', '2 tbsp Jaggery', '1 tbsp Kokum', 'Spices'],
    instructions: ['Boil dal', 'Add jaggery and kokum', 'Prepare tempering', 'Mix and simmer'],
    tips: 'Use fresh curry leaves for better aroma.'
  },
  {
    id: 2, slug: 'dal-tadka', name: 'Dhaba Style Dal Tadka',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&fit=crop',
    prepTime: '10 mins', cookTime: '25 mins', difficulty: 'Medium', servings: 4,
    mainProduct: 'Yellow Moong Dal', productSlug: 'moong-dal',
    ingredients: ['1 cup Moong Dal', 'Onions', 'Tomatoes', 'Ghee for Tadka'],
    instructions: ['Cook dal', 'Fry onions and tomatoes', 'Add tadka'],
    tips: 'Double tadka enhances the flavor.'
  },
  {
    id: 3, slug: 'moong-khichdi', name: 'Comforting Moong Khichdi',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&fit=crop',
    prepTime: '10 mins', cookTime: '20 mins', difficulty: 'Easy', servings: 3,
    mainProduct: 'Yellow Moong Dal', productSlug: 'moong-dal',
    ingredients: ['1/2 cup Moong Dal', '1/2 cup Rice', 'Turmeric', 'Ghee'],
    instructions: ['Wash dal and rice', 'Pressure cook with spices', 'Serve with ghee'],
    tips: 'Serve with pickle and papad.'
  },
  {
    id: 4, slug: 'chana-masala', name: 'Punjabi Chole',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&fit=crop',
    prepTime: '8 hours', cookTime: '45 mins', difficulty: 'Medium', servings: 5,
    mainProduct: 'Kabuli Chana', productSlug: 'white-chana',
    ingredients: ['1 cup Kabuli Chana', 'Onion tomato paste', 'Chole masala'],
    instructions: ['Soak chana overnight', 'Boil until soft', 'Cook gravy and mix'],
    tips: 'Boil with tea bags for dark color.'
  },
  {
    id: 5, slug: 'dal-dhokli', name: 'Traditional Dal Dhokli',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&fit=crop',
    prepTime: '30 mins', cookTime: '40 mins', difficulty: 'Hard', servings: 4,
    mainProduct: 'Premium Toor Dal', productSlug: 'toor-dal',
    ingredients: ['1 cup Toor Dal', 'Wheat flour for dhokli', 'Peanuts', 'Jaggery'],
    instructions: ['Make wheat dough', 'Prepare dal', 'Add rolled dough pieces to boiling dal'],
    tips: 'Roll dhokli thin for better texture.'
  },
  {
    id: 6, slug: 'sprouted-moong-salad', name: 'Sprouted Moong Salad',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&fit=crop',
    prepTime: '2 days', cookTime: '5 mins', difficulty: 'Easy', servings: 2,
    mainProduct: 'Whole Green Moong', productSlug: 'green-moong',
    ingredients: ['1 cup Sprouted Moong', 'Cucumber', 'Tomato', 'Lemon juice'],
    instructions: ['Sprout moong over 2 days', 'Mix with chopped veggies', 'Season and serve'],
    tips: 'Slightly steam sprouts for easier digestion.'
  },
  {
    id: 7, slug: 'rajma-masala', name: 'Rajma Chawal Special',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&fit=crop',
    prepTime: '8 hours', cookTime: '50 mins', difficulty: 'Medium', servings: 4,
    mainProduct: 'Kashmiri Rajma', productSlug: 'rajma',
    ingredients: ['1 cup Rajma', 'Onions', 'Tomatoes', 'Ginger garlic paste'],
    instructions: ['Soak overnight', 'Pressure cook well', 'Simmer in rich tomato gravy'],
    tips: 'Mash a few rajma beans to thicken gravy.'
  }
];
export default recipes;
`);

write('src/data/blogs.js', `export const blogs = [
  { id: 1, slug: 'benefits-of-toor-dal', title: 'Health Benefits of Toor Dal', excerpt: 'Discover why Toor Dal is a staple.', image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600', category: 'Health', author: 'Farmish Team', date: '2023-10-01T10:00:00Z', readTime: '5 min', content: 'Toor dal is amazing for health...' },
  { id: 2, slug: 'how-to-store-pulses', title: 'How to Store Pulses Correctly', excerpt: 'Keep your pulses fresh for longer.', image: 'https://images.unsplash.com/photo-1558238686-21dcbd21eec4?w=600', category: 'Tips', author: 'Farmish Team', date: '2023-10-05T10:00:00Z', readTime: '3 min', content: 'Store in airtight containers...' },
  { id: 3, slug: 'protein-rich-indian-foods', title: 'Protein Rich Indian Foods', excerpt: 'Vegetarian sources of protein.', image: 'https://images.unsplash.com/photo-1627471168233-6a9b9aeb6e28?w=600', category: 'Nutrition', author: 'Dr. Sharma', date: '2023-10-10T10:00:00Z', readTime: '6 min', content: 'Pulses are excellent protein sources...' },
  { id: 4, slug: 'traditional-kathol-recipes', title: 'Traditional Kathol Recipes', excerpt: 'Reviving ancient recipes.', image: 'https://images.unsplash.com/photo-1589131662999-4c8d9e68b3dc?w=600', category: 'Recipes', author: 'Chef Kumar', date: '2023-10-15T10:00:00Z', readTime: '8 min', content: 'Traditional methods of cooking...' },
  { id: 5, slug: 'farm-stories', title: 'Farm Stories: Meet Our Farmers', excerpt: 'Behind the scenes at Farmish.', image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600', category: 'Story', author: 'Farmish Team', date: '2023-10-20T10:00:00Z', readTime: '4 min', content: 'Our farmers work hard...' },
  { id: 6, slug: 'sustainable-farming', title: 'Sustainable Farming Practices', excerpt: 'How we care for the earth.', image: 'https://images.unsplash.com/photo-1558238686-21dcbd21eec4?w=600', category: 'Environment', author: 'Eco Team', date: '2023-10-25T10:00:00Z', readTime: '5 min', content: 'Sustainability is key...' },
  { id: 7, slug: 'cooking-tips-for-dal', title: 'Pro Cooking Tips for Perfect Dal', excerpt: 'Get the perfect texture every time.', image: 'https://images.unsplash.com/photo-1627471168233-6a9b9aeb6e28?w=600', category: 'Tips', author: 'Chef Kumar', date: '2023-11-01T10:00:00Z', readTime: '3 min', content: 'Soaking is important...' },
  { id: 8, slug: 'identifying-quality-kathol', title: 'Identifying Quality Kathol', excerpt: 'How to pick the best pulses.', image: 'https://images.unsplash.com/photo-1589131662999-4c8d9e68b3dc?w=600', category: 'Guide', author: 'Farmish Team', date: '2023-11-05T10:00:00Z', readTime: '4 min', content: 'Look for consistent color and size...' }
];
export default blogs;
`);

write('src/data/reviews.js', `export const reviews = [
  // Demo content
  { id: 1, customerName: 'Rahul D.', rating: 5, reviewText: 'Best Toor Dal I have ever tasted!', productName: 'Premium Toor Dal', productSlug: 'toor-dal', date: '2023-10-10', verified: true },
  { id: 2, customerName: 'Sneha P.', rating: 4, reviewText: 'Cooks very fast, good quality.', productName: 'Yellow Moong Dal', productSlug: 'moong-dal', date: '2023-10-12', verified: true },
  { id: 3, customerName: 'Amit S.', rating: 5, reviewText: 'Excellent Rajma, totally premium.', productName: 'Kashmiri Rajma', productSlug: 'rajma', date: '2023-10-15', verified: true },
  { id: 4, customerName: 'Priya K.', rating: 5, reviewText: 'Authentic taste.', productName: 'Bengal Gram Dal', productSlug: 'chana-dal', date: '2023-10-18', verified: true },
  { id: 5, customerName: 'Ravi M.', rating: 4, reviewText: 'Nice packaging.', productName: 'Premium Toor Dal', productSlug: 'toor-dal', date: '2023-10-20', verified: true },
  { id: 6, customerName: 'Neha J.', rating: 5, reviewText: 'Perfect for idli batter.', productName: 'White Urad Dal', productSlug: 'urad-dal', date: '2023-10-22', verified: true },
  { id: 7, customerName: 'Vikram B.', rating: 4, reviewText: 'Good whole moong.', productName: 'Whole Green Moong', productSlug: 'green-moong', date: '2023-10-25', verified: true },
  { id: 8, customerName: 'Meera T.', rating: 5, reviewText: 'My kids love the chole made from this.', productName: 'Kabuli Chana', productSlug: 'white-chana', date: '2023-10-28', verified: true }
];
export default reviews;
`);

write('src/context/CartContext.jsx', `import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('farmish_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('farmish_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, selectedSize, quantity) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.selectedSize.size === selectedSize.size);
      if (existing) {
        return prev.map(item => item.product.id === product.id && item.selectedSize.size === selectedSize.size 
          ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { id: Date.now(), product, selectedSize, quantity }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) return removeFromCart(itemId);
    setCart(prev => prev.map(item => item.id === itemId ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + (item.selectedSize.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const isInCart = (productId, size) => cart.some(item => item.product.id === productId && item.selectedSize.size === size);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
`);

write('src/context/SearchContext.jsx', `import React, { createContext, useState } from 'react';
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
    <SearchContext.Provider value={{ searchQuery, setSearchQuery: setQuery, searchResults, isSearchOpen, openSearch, closeSearch, setQuery: setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
`);

write('src/hooks/useScrollAnimation.js', `import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const currentRef = ref.current;
    if (currentRef) {
      const elements = currentRef.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return ref;
};
export default useScrollAnimation;
`);

console.log('Core data and contexts written');
