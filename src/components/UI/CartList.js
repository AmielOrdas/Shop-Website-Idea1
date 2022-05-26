import React from 'react'
import CartItem from './CartItem'
import classes from "./CartList.module.css"
function CartList({ItemsInCart}) {
  return (
    <ul  className = {classes.gridContainerUl}>
      {ItemsInCart.map((ItemsCart) => <CartItem key = {ItemsCart.id} ItemsCartProps = {ItemsCart}/>)}
      
    </ul>
  )
}

export default CartList
