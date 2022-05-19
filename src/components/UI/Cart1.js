import React, {useContext} from 'react'
import CartItems from "../../context/CartItems"
import ShopList from '../ShopList'
function Cart() {
  const CartItemsContext = useContext(CartItems);
  return (
    <ul>
      <ShopList Items = {CartItemsContext.ItemsInCart}></ShopList>
    </ul>
  )
}

export default Cart
