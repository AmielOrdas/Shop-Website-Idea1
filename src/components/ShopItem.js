import {useContext} from 'react'
import classes from "./ShopItem.module.css"
import CartItems from "../context/CartItems"
function ShopItem({ItemProps, addFunc, reduceFunc}) {
  const CartItemsContext = useContext(CartItems); //This is to connect to the context object
  
  const ItemInCart = CartItemsContext.CheckCartItems(ItemProps.id) //This is to store the true/false value of the function CheckItemInCart that we passed through the property CheckCartItems
  
  function addItemToCart()
  {
    if (ItemProps.Cart !== 5)
    {
      addFunc(ItemProps.id, ItemProps.Cart); //We will call this because we still need to change the apperance of Shop.js. This will ensure that the cart will increase
      // ItemProps.Cart = ItemProps.Cart + 1
      // ItemProps.totalPrice = ItemProps.Cart * ItemProps.price
      // console.log("Total Cart: "+ ItemProps.Cart)
      // console.log("total Price: " + ItemProps.totalPrice)
      if (!ItemInCart) //If the item is not in the cart
      {
        console.log("Put to Cart!")
        
        CartItemsContext.updateCart(
          {
            id: ItemProps.id,
            title: ItemProps.title,
            image: ItemProps.image,
            price: ItemProps.price,
            Cart: ItemProps.Cart + 1,
            totalPrice: ItemProps.Cart + ItemProps.price
          }
        )
        
      }
      else if(ItemInCart && ItemProps.quantity !==0)
      {
        console.log("Putting +1 on the Item" + ItemProps.id) 
        CartItemsContext.addToCart(
        {
          id: ItemProps.id,
          Cart:ItemProps.Cart + 1,
          price: ItemProps.price,
          totalPrice: ItemProps.totalPrice
          //ItemProps.Cart * ItemProps.price + ItemProps.price, This works
        })
        
        // CartItemsContext.addToCart(
        //   {
        //     id: ItemProps.id,
        //     title: ItemProps.title,
        //     image: ItemProps.image,
        //     Price: ItemProps.price * ItemProps.quantity,
        //     Cart: ItemProps.Cart + 1
        //   }
        // )
      }
      
    }
  }
  function removeItemFromCart()
  {
    if (ItemProps.Cart !==0 && ItemInCart)
    {
      reduceFunc(ItemProps.id, ItemProps.Cart)
      // if (ItemInCart && ItemProps.Cart === 0) //If the item is in cart and the quantity is 0
      // {
        
      // }
      // else
      console.log("Removing -1 on the Item" + ItemProps.id)
      CartItemsContext.subtractCart(
        {
          id: ItemProps.id,
          Cart: ItemProps.Cart,
          price: ItemProps.price,
          
        }
        )
      console.log("Cart Quantity: " + ItemProps.Cart)
      // if (ItemProps.Cart === 0 && ItemInCart)
      // {
        
      //   CartItemsContext.removeFromCart(ItemProps.id)
      // }
      
    }
  }
  //If the Cart Items are equal to 0 and it is inside the cart, we remove from the cart. We did not put this in any button because this should happen instantly if the quantity is 0.
  if (ItemProps.Cart === 0 && ItemInCart)
  {
    CartItemsContext.removeFromCart(ItemProps.id)
  }
  
  return (
    <li>
      <h3>{ItemProps.title}</h3>
      <img src = {ItemProps.image}/>
      <div>
        <h4>&#8369;{ItemProps.price} each</h4>
        <h4>Qty: {ItemProps.quantity}</h4>
        <h5>Inside Cart: {ItemProps.Cart}</h5>
        <h5>Total Price {ItemProps.totalPrice}</h5>
        <button onClick={addItemToCart}>+</button>
        <button onClick={removeItemFromCart}>-</button>
      </div>
    </li>
  )
}

/*
This is for the useState hook but since we used context, we do not need it anymore
() => addFunc(ItemProps.quantity, ItemProps.id, ItemProps.Cart)
()) => reduceFunc(ItemProps.quantity, ItemProps.id, ItemProps.Cart)
*/


export default ShopItem
