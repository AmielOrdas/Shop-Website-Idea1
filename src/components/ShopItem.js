import React from 'react'
import classes from "./ShopItem.module.css"
function ShopItem({ItemProps, addFunc, reduceFunc}) {
  console.log("Hello")
  return (
    <li>
      <h3>{ItemProps.title}</h3>
      <img src = {ItemProps.image}/>
      <div>
        <h4>&#8369;{ItemProps.price} each</h4>
        <h4>Qty: {ItemProps.quantity}</h4>
        <h5>Inside Cart: {ItemProps.Cart}</h5>
        <button onClick={() => addFunc(ItemProps.quantity, ItemProps.id, ItemProps.Cart)}>+</button>
        <button onClick={() => reduceFunc(ItemProps.quantity, ItemProps.id, ItemProps.Cart)}>-</button>
      </div>
    </li>
  )
}


export default ShopItem
