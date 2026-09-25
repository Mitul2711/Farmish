import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <main style={{flex: 1}}>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
export default Layout;
