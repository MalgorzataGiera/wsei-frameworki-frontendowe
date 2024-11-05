import {data} from '../data/module-data.js';
import CarProfile from '../components/CarProfile.jsx';
import '../App.css'
import React, { useReducer } from 'react';
import AppReducer from '../data/AppReducer';

function Lab1() {
  const [items, dispatch] = useReducer(AppReducer, data); // useReducer

  return (
    <div className="App">
      {data.map((car, index) => (
        <CarProfile key={index} {...car} dispatch={dispatch}/>
      ))}
    </div>
  );

}

export default Lab1;