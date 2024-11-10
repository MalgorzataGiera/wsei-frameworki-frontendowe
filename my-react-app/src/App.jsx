import React, { useReducer } from 'react';
import './App.css'
import RootLayout from './layouts/RootLayout.jsx';
import Home from './components/Home.jsx';
import Lab1 from './components/Lab1.jsx';
import Lab2 from './components/Lab2.jsx';
import Lab3 from './components/Lab3.jsx';
import Lab4 from './components/Lab4.jsx';
import Lab4Add from './components/Lab4Add.jsx';
import Lab4Edit from './components/Lab4Edit.jsx';
import Lab5 from './components/Lab5';
import { Routes, Route } from 'react-router-dom';
import AppProvider from './context/AppProvider.jsx';

const App = () => {

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
    },
    { id: 7, 
      label: "Lab 5",
      path: "/lab5", 
      urlPattern: "/lab5",
      element: <Lab5></Lab5> 
    },
];
  return (   
    <AppProvider>
      <RootLayout items={menuItems}>
        <Routes>
        {menuItems.map(item => (<Route key={item.id} path={item.path} element={item.element}></Route>))};    
            <Route path="/lab2" element={<div>Nie podano ID w adresie URL.</div>} />        
             <Route path="/lab4/add" element={<Lab4Add />} />
             <Route path="/lab4/edit/:id" element={<Lab4Edit />} />
        </Routes>
      </RootLayout>
    </AppProvider>
  );
}

export default App
