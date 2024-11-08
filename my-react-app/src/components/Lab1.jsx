import {data} from '../data/module-data.js';
import CarProfile from '../components/CarProfile.jsx';
import '../App.css'
import React, { useReducer } from 'react';
import AppReducer from '../data/AppReducer';
import AppContext from '../data/AppContext';

function Lab1() {
  const [items, dispatch] = useReducer(AppReducer, data); // useReducer

  return (
    <AppContext.Provider value={{ items, dispatch }}>
      <div className="App">
        {items.map((car, index) => (
          <CarProfile key={index} id={car.id} />
        ))}
      </div>
    </AppContext.Provider>
  );

}

export default Lab1;