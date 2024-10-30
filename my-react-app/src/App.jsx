//import { useState } from 'react'
import './App.css'
import CarProfile from './CarProfile.jsx'
import {data} from './lab01/module-data.js';

function App() {
  return (
    <>
    {
      data.map((car, index) => (<CarProfile key={index} {...car}/>))
    }
    </>
    
    
  )
}

export default App
