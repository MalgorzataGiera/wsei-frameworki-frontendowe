//import React from 'react';

function NavBarMenu({ items }) {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBarMenu;
