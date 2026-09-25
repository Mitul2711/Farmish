export const recipes = [
  {
    id: 1, slug: 'gujarati-dal', name: 'Classic Gujarati Dal',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&fit=crop',
    prepTime: '15 mins', cookTime: '30 mins', difficulty: 'Easy', servings: 4,
    mainProduct: 'Premium Toor Dal', productSlug: 'toor-dal',
    ingredients: ['1 cup Farmish Toor Dal', '2 tbsp Jaggery', '1 tbsp Kokum', '1 tsp Turmeric', '2 Green Chillies', 'Curry Leaves', 'Mustard Seeds', 'Ghee'],
    instructions: ['Wash and pressure cook toor dal with turmeric for 3 whistles', 'Mash the dal and add jaggery, kokum, salt', 'Prepare tempering with ghee, mustard seeds, curry leaves, green chillies', 'Pour tempering over dal and simmer for 10 mins'],
    tips: 'Use fresh curry leaves for better aroma. Add a pinch of hing for authentic taste.'
  },
  {
    id: 2, slug: 'dal-tadka', name: 'Dhaba Style Dal Tadka',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&fit=crop',
    prepTime: '10 mins', cookTime: '25 mins', difficulty: 'Medium', servings: 4,
    mainProduct: 'Yellow Moong Dal', productSlug: 'moong-dal',
    ingredients: ['1 cup Farmish Moong Dal', '2 Onions chopped', '2 Tomatoes chopped', '2 tbsp Ghee', 'Cumin Seeds', 'Red Chilli Powder', 'Garam Masala'],
    instructions: ['Cook moong dal until soft', 'Heat ghee, add cumin seeds', 'Fry onions until golden, add tomatoes', 'Add spices, cook until oil separates', 'Pour sizzling tadka over dal'],
    tips: 'Double tadka enhances the flavor. Finish with fresh coriander and a squeeze of lemon.'
  },
  {
    id: 3, slug: 'moong-khichdi', name: 'Comforting Moong Khichdi',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&fit=crop',
    prepTime: '10 mins', cookTime: '20 mins', difficulty: 'Easy', servings: 4,
    mainProduct: 'Yellow Moong Dal', productSlug: 'moong-dal',
    ingredients: ['1 cup Rice', '½ cup Farmish Moong Dal', '1 tsp Turmeric', '1 tsp Cumin', 'Ghee', 'Salt to taste'],
    instructions: ['Wash rice and dal together', 'Pressure cook with turmeric and salt for 3 whistles', 'Temper with ghee and cumin', 'Serve with curd and pickle'],
    tips: 'Add vegetables like peas, carrots for extra nutrition.'
  },
  {
    id: 4, slug: 'chana-masala', name: 'Punjabi Chana Masala',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&fit=crop',
    prepTime: '8 hrs (soak)', cookTime: '40 mins', difficulty: 'Medium', servings: 4,
    mainProduct: 'Kabuli Chana', productSlug: 'white-chana',
    ingredients: ['2 cups Farmish Kabuli Chana', '2 Onions', '3 Tomatoes', 'Chole Masala', 'Tea Bags', 'Ginger-Garlic Paste'],
    instructions: ['Soak chana overnight', 'Boil with tea bags for dark color', 'Prepare masala with onion-tomato base', 'Add boiled chana and simmer', 'Garnish with ginger and green chillies'],
    tips: 'Boil with tea leaves or tea bags for the authentic dark color.'
  },
  {
    id: 5, slug: 'dal-dhokli', name: 'Gujarati Dal Dhokli',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&fit=crop',
    prepTime: '20 mins', cookTime: '35 mins', difficulty: 'Hard', servings: 4,
    mainProduct: 'Premium Toor Dal', productSlug: 'toor-dal',
    ingredients: ['1 cup Farmish Toor Dal', '1 cup Wheat Flour', 'Jaggery', 'Tamarind', 'Peanuts', 'Spices'],
    instructions: ['Cook dal with jaggery and tamarind', 'Knead wheat flour dough with spices', 'Roll thin, cut into pieces', 'Add dhokli pieces to boiling dal', 'Cook until dhokli are done', 'Add tempering and serve'],
    tips: 'Roll dhokli thin for best texture. Add roasted peanuts for crunch.'
  },
  {
    id: 6, slug: 'sprouted-moong-salad', name: 'Sprouted Moong Salad',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&fit=crop',
    prepTime: '2 days (sprout)', cookTime: '0 mins', difficulty: 'Easy', servings: 2,
    mainProduct: 'Whole Green Moong', productSlug: 'green-moong',
    ingredients: ['1 cup Farmish Green Moong (sprouted)', 'Onion', 'Tomato', 'Cucumber', 'Lemon Juice', 'Chaat Masala', 'Green Chutney'],
    instructions: ['Soak moong for 8 hours, drain and sprout for 1-2 days', 'Chop onion, tomato, cucumber', 'Mix sprouts with vegetables', 'Season with lemon juice, salt, chaat masala', 'Drizzle green chutney on top'],
    tips: 'Keep sprouts wrapped in damp cloth for 24-48 hours. Rinse twice daily.'
  },
  {
    id: 7, slug: 'rajma-masala', name: 'Classic Rajma Masala',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&fit=crop',
    prepTime: '8 hrs (soak)', cookTime: '45 mins', difficulty: 'Medium', servings: 4,
    mainProduct: 'Kashmiri Rajma', productSlug: 'rajma',
    ingredients: ['2 cups Farmish Kashmiri Rajma', '2 Onions', '3 Tomatoes', 'Rajma Masala', 'Ginger-Garlic Paste', 'Cream'],
    instructions: ['Soak rajma overnight in plenty of water', 'Pressure cook for 4-5 whistles until soft', 'Prepare onion-tomato gravy with spices', 'Add cooked rajma to the gravy', 'Simmer for 15-20 minutes', 'Finish with cream and kasuri methi'],
    tips: 'Soak rajma in warm water for faster soaking. Mash some rajma for thicker gravy.'
  }
];
export default recipes;
