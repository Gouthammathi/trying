import React from 'react';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <main className="w-full">
        {children}
      </main>
      <Header />
      <Footer />
    </div>
  );
};

export default Layout;
