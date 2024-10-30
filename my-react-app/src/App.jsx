//import { useState } from 'react'
import './App.css'
//import CarProfile from './components/CarProfile.jsx'
//import {data} from './data/module-data.js';
import RootLayout from './layouts/RootLayout.jsx';

function App() {
  return (
    // <>
    // {
    //   data.map((car, index) => (<CarProfile key={index} {...car}/>))
    // }
    // </>
    <RootLayout>
      <div>
        <h1>Content</h1>
        <p>Welcome to the application!</p>
      </div>
    </RootLayout>
    
  )
}

export default App
