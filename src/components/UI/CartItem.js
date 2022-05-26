import React from 'react'
import classes from "./CartItem.module.css"
function CartItem({ItemsCartProps}) {
    
  
    return (
    <li>
      <h3>{ItemsCartProps.title}</h3>
      <img src = {ItemsCartProps.image} alt = {"Item Pictures"}/>
      <div>
          <h5>Total Price: {ItemsCartProps.totalPrice}</h5>
          <h5>Quantity to buy: {ItemsCartProps.Cart}</h5>
          
      </div>

    </li>
  )
}

export default CartItem
