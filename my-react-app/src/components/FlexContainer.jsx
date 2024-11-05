
import React, { useContext } from 'react';
import AppContext from '../data/AppContext';  // Importujemy kontekst
import CarProfile from './CarProfile';      // Importujemy komponent profilu

const FlexContainer = () => {
  // Pobieramy stan (items) z kontekstu
  const { items } = useContext(AppContext);

  return (
    <div className="d-flex flex-wrap">
      {items.map(item => (
        <CarProfile
          key={item.id}
          id={item.id}
          brand={item.brand}
          color={item.color}
          maxSpeed={item.maxSpeed}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default FlexContainer;
