import React from 'react'
import ShopItem from "./ShopItem"
import classes from "./ShopList.module.css"


function ShopList({Items, add, reduce}) {
  return (
    <ul className = {classes.flexContainerUl}>
      {Items.map((Item) => <ShopItem key = {Item.id} ItemProps = {Item} addFunc = {add} reduceFunc = {reduce}/>)}
    </ul>
  )
}

export default ShopList
