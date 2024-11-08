import React, { useReducer } from 'react';
//import { useState } from 'react'
import './App.css'
//import CarProfile from './components/CarProfile.jsx'
//import {data} from './data/module-data.js';
import RootLayout from './layouts/RootLayout.jsx';
import Home from './components/Home.jsx';
import Lab1 from './components/Lab1.jsx';
import Lab2 from './components/Lab2.jsx';
import Lab3 from './components/Lab3.jsx';
import Lab4 from './components/Lab4.jsx';
import Lab4Add from './components/Lab4Add.jsx';
import { Routes, Route } from 'react-router-dom';
import AppContext from './data/AppContext';
import AppReducer from "./data/AppReducer";
import CarProfile from './components/CarProfile.jsx';
import { AppProvider } from './data/AppContext';

const initialState = {
  items: []
};

const App = () => {
  const [state, appDispatch] = useReducer(AppReducer, initialState)

  const menuItems = [
    {   id: 1, 
        label: "Home",
        path: "/",
        urlPattern: "/",
        element: <Home></Home>,
    },
    { 
        id: 2, 
        label: "Labolatorium 1",
        path: "/lab1",
        urlPattern: "/lab1",
        element: <Lab1></Lab1>,
    },
    { id: 3, 
        label: "Labolatorium 2",
        path: "/lab2/:id",
        urlPattern: "/lab2:id",
        element: <Lab2></Lab2>,
    },
    { id: 4, 
      label: "Labolatorium 3",
      path: "/lab3",
      urlPattern: "/lab3",
      element: <Lab3></Lab3>,
    },
    { id: 5, 
      label: "Labolatorium 4",
      path: "/lab4",
      urlPattern: "/lab4",
      element: <Lab4></Lab4>,
    },
    { id: 6, 
      label: "Add new car",
      path: "/lab4/add",
      urlPattern: "/lab4/add",
      element: <Lab4Add></Lab4Add>,
    }
];
  return (   
    <AppProvider>
      <RootLayout items={menuItems}>
        <Routes>
        {menuItems.map(item => (<Route key={item.id} path={item.path} element={item.element}></Route>))};    
            <Route path="/lab2" element={<div>Nie podano ID w adresie URL.</div>} />        
             <Route path="/lab4/add" element={<Lab4Add />} />
        </Routes>
      </RootLayout>
    </AppProvider>
  );
}

export default App
