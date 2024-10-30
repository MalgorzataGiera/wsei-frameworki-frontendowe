// src/layouts/RootLayout.js
//import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

function RootLayout({ children }) {
  const menuItems = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'About' },
    { id: 3, label: 'Contact' },
  ];

  return (
    <div>
      <NavBarMenu items={menuItems} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default RootLayout;
