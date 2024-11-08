
import React, { useContext } from 'react';
import AppContext from '../data/AppContext';
import CarProfile from './CarProfile';
const FlexContainer = () => {
  const context = useContext(AppContext);
  const items = context.items;

  return (
    <div className="d-flex flex-wrap">
      {items.map(item => (
        <CarProfile key={item.id} id={item.id} />
      ))}
    </div>
  );
};

export default FlexContainer;
