import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Shop from './pages/Shop'

import Navigation from './components/UI/Navigation'
function App() {
  return (
    <div>
        <Navigation/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/Shop" element ={<Shop/>}/>
         
      </Routes>
    </div>
  )
}

export default App
