import React from 'react'
import classes from "./Shop.module.css"
import Coke from "../images/coke.png"
import Royal from "../images/royal.jpg"
import Sprite from "../images/sprite.png"
function Shop() {
  return (
    
    <body className = {classes.body}>
      <main className = {classes.main}>
        <ul className = {classes.flexContainerUl}>
          <li className = {classes.item}>
            <img className = {classes.coke} src={Coke} alt={"Coke picture"}/>
          </li>
          <li className = {classes.item}>
            <img src={Royal} alt={"Royal picture"}/>  
          </li>
          <li className = {classes.item}>
            <img src={Sprite} alt={"Sprite picture"}/>  
          </li>
        </ul>
        <ul className = {classes.flexContainerUl}>
          <li className = {classes.item}>

          </li>
          <li className = {classes.item}>

          </li>
          <li className = {classes.item}>

          </li>
        </ul>
      </main>
      <footer className = {classes.footer}>
        
      </footer>
      
    </body>
  )
}

export default Shop
