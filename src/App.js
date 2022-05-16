import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Navigation from './components/UI/Navigation'
function App() {
  return (
    <div>
        <Navigation/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Shop" element ={<Shop/>}/>
          <Route path = "/Cart" element ={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
