import React, {useState, useContext} from 'react'
import classes from "./Shop.module.css"
import ShopList from '../components/ShopList'
import Coke from "../images/coke.png"
import Royal from "../images/royal.jpg"
import Sprite from "../images/sprite.png"
import Bags from "../images/Bag.jpg"
import Water from "../images/Nature's spring.jpg"
import Eggs from "../images/Eggs carton.jpg"
import CartItems from "../context/CartItems"
import CartList from "../components/UI/CartList"
import Footer from '../components/Footer'
function Shop() {
  const [Items, setItems] = useState([
    {
        id:1,
        title: "Coke",
        image: Coke,
        price: 10,
        quantity:5,
        Cart: 0,
        totalPrice: 0,
    },
    {
        id:2,
        title: "Royal",
        image: Royal,
        price: 15,
        quantity:5,
        Cart: 0,
        totalPrice: 0,
    },
    {
        id:3,
        title: "Sprite",
        image: Sprite,
        price: 20,
        quantity:5,
        Cart: 0,
        totalPrice: 0,
    },
    {
        id:4,
        title: "Bags",
        image: Bags,
        price: 1000,
        quantity:5,
        Cart: 0,
        totalPrice: 0,
    },
    {
        id:5,
        title: "Water",
        image: Water,
        price: 10,
        quantity:5,
        Cart: 0,
        totalPrice: 0,
    },
    {
        id:6,
        title: "Eggs",
        image: Eggs,
        price: 100,
        quantity:5,
        Cart: 0,
        totalPrice: 0,
    },
  ])
  

  
  function reduceCartItems(id, cart)
  { 
    if (cart !== 0)
    {
      setItems(Items.map((Item) => Item.id === id ? {...Item, quantity: Item.quantity+1 , Cart: cart-1, } : Item)) /* If the Item's id is equal to the id then we retain everything using "...Item" but quantity will be -1 and cart will be +1. If false, then we retain everything by using ":Item" */
                                                                                                
    }
  }
  
  function addCartItems(id, cart)
  {
    if (cart !== 5){
      setItems(Items.map((Item) => Item.id === id ? {...Item, quantity: Item.quantity-1, Cart: cart + 1, totalPrice: Item.Cart * Item.price} : Item)) /* If the Item's id is equal to the id then we retain everything using "...Item" but quantity will be +1 and cart will be -1. If false, then we retain everything by using ":Item" */;
    }
  }
  const CartItemsContext = useContext(CartItems);
  

  return (
    
    <body className = {classes.body}>
      <main className = {classes.main}>
        <ShopList Items = {Items} add = {addCartItems} reduce = {reduceCartItems} />
      </main>
      <aside className = {classes.aside}>
        <h1>Cart Section</h1>
        <CartList ItemsInCart ={CartItemsContext.ItemsInCart} />
        {CartItemsContext.NumberOfItemsInCart !== 0 ? <button>Checkout</button> : <h1></h1>}
        
      </aside>
      <footer className = {classes.footer}>
      <Footer/>
      </footer>
      
    </body>
  )
}

export default Shop

/* <ul className = {classes.flexContainerUl}>
          <li>
            <h3>Coke</h3>
            <img className = {classes.coke} src={Coke} alt={"Coke picture"}/>
            <h4>&#8369;50</h4>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
            
          </li>
          <li>
            <h3>Royal</h3>
            <img src={Royal} alt={"Royal picture"}/>  
            <h4>&#8369;15</h4>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
          </li>
          <li>
            <h3>Sprite</h3>
            <img src={Sprite} alt={"Sprite picture"}/>  
            <h4>&#8369;20</h4>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
          </li>
        </ul>
        <ul className = {classes.flexContainerUl}>
          <li>
            <h3>Bag</h3>
            <img className = {classes.Bag}src={Bags} alt={"Sprite picture"}/>  
            <h4>&#8369;1000</h4>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
          </li>
          <li>
            <h3>Water Bottle</h3>
            <img src={Water} alt={"Sprite picture"}/>  
            <h4>&#8369;10</h4>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
          </li>
          <li>
            <h3>Eggs</h3>
            <img className = {classes.Eggs} src={Eggs} alt={"Sprite picture"}/>  
            <h4>&#8369;100</h4>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
          </li>
        </ul> */