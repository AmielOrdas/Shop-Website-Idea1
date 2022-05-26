import React from 'react'
import {Route, Routes, Router} from "react-router-dom"

import Home from './pages/Home'
import Shop from './pages/Shop'

import Navigation from './components/UI/Navigation'
function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path = "/"  element = {<Home/>} />
        <Route path = "/XD"  element ={<Shop/>}/>
      </Routes>
      
      
        
     </div>  
    
  )
}

export default App
