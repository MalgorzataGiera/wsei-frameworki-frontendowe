// src/layouts/RootLayout.js
import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

function RootLayout({ children }) {
  const menuItems = [
    { id: 1, label: "Home", path: "/"},
    { id: 2, label: "Laboratorium 1", path: "/lab1" },
    { id: 3, label: "Laboratorium 2", path: "/lab2/1"  },
    { id: 4, label: "Laboratorium 3", path: "/lab3"  },
    { id: 5, label: "Laboratorium 4", path: "/lab4"  },
    { id: 6, label: "Add new car", path: "/lab4/add"  },    
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
