const fs = require('fs');
const path = require('path');

const write = (file, content) => {
  fs.writeFileSync(path.join(__dirname, file), content, 'utf8');
};

write('src/styles/index.css', `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

:root {
  --color-primary: #2D6A4F;
  --color-primary-light: #40916C;
  --color-primary-lightest: #52B788;
  --color-primary-dark: #1B4332;
  --color-secondary: #8B7355;
  --color-secondary-light: #A0896D;
  --color-accent: #D4A843;
  --color-accent-light: #E5C06E;
  --color-bg: #FEFCF3;
  --color-bg-alt: #F5F0E8;
  --color-surface: #FFFFFF;
  --color-text-primary: #2C2C2C;
  --color-text-secondary: #666666;
  --color-text-light: #999999;
  --color-border: #E8E0D4;
  --color-success: #2D6A4F;
  --color-error: #C1292E;
  --color-warning: #D4A843;

  --spacing-4: 4px; --spacing-8: 8px; --spacing-12: 12px; --spacing-16: 16px;
  --spacing-20: 20px; --spacing-24: 24px; --spacing-32: 32px; --spacing-48: 48px;
  --spacing-64: 64px; --spacing-80: 80px; --spacing-96: 96px;

  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px; --radius-full: 9999px;
  
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  --shadow-soft: 0 8px 30px rgba(0,0,0,0.04);
  
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;

  --font-body: 'Inter', sans-serif;
  --font-heading: 'Playfair Display', serif;
  
  --z-below: -1; --z-normal: 1; --z-above: 10; --z-sticky: 100; --z-overlay: 1000; --z-toast: 9999;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background-color: var(--color-bg);
  font-family: var(--font-body);
  color: var(--color-text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.2;
}

a { text-decoration: none; color: inherit; }
ul, ol { list-style: none; }
img { max-width: 100%; height: auto; display: block; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 var(--spacing-20); }
.section-padding { padding: var(--spacing-80) 0; }
@media (max-width: 768px) { .section-padding { padding: var(--spacing-48) 0; } }

.section-header { text-align: center; margin-bottom: var(--spacing-48); }
.section-header .subtitle { color: var(--color-secondary); font-weight: 600; text-transform: uppercase; font-size: 0.875rem; letter-spacing: 0.05em; margin-bottom: var(--spacing-8); display: block; }
.section-header h2 { font-size: 2.5rem; margin-bottom: var(--spacing-16); }
.section-header p { color: var(--color-text-secondary); max-width: 600px; margin: 0 auto; }

.btn { display: inline-flex; align-items: center; justify-content: center; gap: var(--spacing-8); padding: var(--spacing-12) var(--spacing-24); border-radius: var(--radius-full); font-weight: 500; transition: var(--transition-normal); text-align: center; }
.btn-primary { background: var(--color-primary); color: white; }
.btn-primary:hover { background: var(--color-primary-dark); transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn-secondary { background: transparent; color: var(--color-primary); border: 2px solid var(--color-primary); }
.btn-secondary:hover { background: var(--color-primary); color: white; }
.btn-accent { background: var(--color-accent); color: white; }
.btn-accent:hover { background: var(--color-accent-light); transform: translateY(-2px); }

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--color-bg-alt); }
::-webkit-scrollbar-thumb { background: var(--color-secondary-light); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-secondary); }

::selection { background: var(--color-primary-lightest); color: white; }

html { scroll-behavior: smooth; }

.animate-on-scroll { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
.animate-on-scroll.is-visible { opacity: 1; transform: translateY(0); }

@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
@keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
`);

write('index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Farmish — From Our Farms to Your Family</title>
    <meta name="description" content="Premium quality pulses and grains directly sourced from trusted farms." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`);

write('src/main.jsx', `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
`);

write('src/App.jsx', `import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { ToastProvider } from './components/ui/Toast';
import Layout from './components/layout/Layout';
import AdminLayout from './components/layout/AdminLayout';
import ScrollToTop from './components/layout/ScrollToTop';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import About from './pages/About';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import AdminCustomers from './pages/admin/AdminCustomers';
import AdminReviews from './pages/admin/AdminReviews';
import AdminContent from './pages/admin/AdminContent';

const App = () => {
  return (
    <ToastProvider>
      <CartProvider>
        <SearchProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/shop" element={<Layout><Shop /></Layout>} />
              <Route path="/product/:slug" element={<Layout><ProductDetail /></Layout>} />
              <Route path="/cart" element={<Layout><Cart /></Layout>} />
              <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
              <Route path="/order-confirmation" element={<Layout><OrderConfirmation /></Layout>} />
              <Route path="/about" element={<Layout><About /></Layout>} />
              <Route path="/recipes" element={<Layout><Recipes /></Layout>} />
              <Route path="/recipe/:slug" element={<Layout><RecipeDetail /></Layout>} />
              <Route path="/blog" element={<Layout><Blog /></Layout>} />
              <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />

              <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
              <Route path="/admin/products" element={<AdminLayout><AdminProducts /></AdminLayout>} />
              <Route path="/admin/orders" element={<AdminLayout><AdminOrders /></AdminLayout>} />
              <Route path="/admin/customers" element={<AdminLayout><AdminCustomers /></AdminLayout>} />
              <Route path="/admin/reviews" element={<AdminLayout><AdminReviews /></AdminLayout>} />
              <Route path="/admin/content" element={<AdminLayout><AdminContent /></AdminLayout>} />
            </Routes>
          </BrowserRouter>
        </SearchProvider>
      </CartProvider>
    </ToastProvider>
  );
};
export default App;
`);

const createPlaceholderPage = (filepath, name) => {
  write(filepath, `import React from 'react';
const ${name} = () => {
  return <div className="page-placeholder container section-padding"><h1>${name}</h1></div>;
};
export default ${name};
`);
};

const pages = [
  'Home', 'Shop', 'ProductDetail', 'Cart', 'Checkout', 'OrderConfirmation',
  'About', 'Recipes', 'RecipeDetail', 'Blog', 'BlogPost', 'Contact'
];
pages.forEach(p => createPlaceholderPage('src/pages/' + p + '.jsx', p));

const adminPages = [
  'AdminDashboard', 'AdminProducts', 'AdminOrders', 'AdminCustomers', 'AdminReviews', 'AdminContent'
];
adminPages.forEach(p => createPlaceholderPage('src/pages/admin/' + p + '.jsx', p));

write('src/components/layout/ScrollToTop.jsx', `import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export default ScrollToTop;
`);

console.log('App setup and placeholders created');
