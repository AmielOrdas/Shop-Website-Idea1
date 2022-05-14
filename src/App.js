import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './components/UI/Home'
import Shop from './components/UI/Shop'
import Cart from './components/UI/Cart'
function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Shop" element ={<Shop/>}/>
        <Route path = "/Cart" element ={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
