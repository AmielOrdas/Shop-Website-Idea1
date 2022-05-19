
import {createContext, useState} from 'react'

//This is the context object that we need to export outside to interact with components outside the file
const CartItems = createContext({
    ItemsInCart: [], //This stores the items that are inside the cart 
    totalItemsInCart:  0 //This is the counter that counts the number of items inside the cart
})



export function CartItemsProvider(props){
    const [userCartItems, setUserCartItems] =  useState([]) //This is the state that tracks the user's cart items
    

    //This is an object that is possible because of createContext in line 5. This object is also the basis of the changes that will happen because this will be dynamic and it will be changed through states
    const context = {
        /*
        This is the property that will store the number of Items inside the cart of the user and it will change based on the state of userCartItems.
        This means if the state of userCartItems changes, the property ItemsInCart will change as well hence why it is dynamic.    
        We can see that the userCartItems is an empty array and the ItemsInCart is also an empty array. This is why both of these are compatible.
        */
        ItemsInCart: userCartItems,  
        

        /*
        This is the property that tracks the size of the array userCartItems. This way, we can show the number of items inside the cart and we can put it in the navigation bar
        */
        
        updateCart: updateCartItems, //This is the property of the object context that contains the updateCartItems function. 
        
        removeFromCart: removeCartItems, //This is the property of the object context that contains the removeCartItems function. 
        
        CheckCartItems: CheckItemInCart, //This is the property that contains the CheckItemInCart function
        
        addToCart: addCartQuantity,
        subtractCart: subtractCartQuantity
        //The reason why we did this is because we need to distribute these functions in the components that needs this so that they will change if the context changes too.
    }
    
    /*
    This is the function that updates the Items that the user adds or removes in the cart. This activates when the user presses + or - button.
    We can easily implement this using 
    function addCartItems(Items)
    {
        prevUserCartItems.concat(Items) 
    }
    This is okay but this might cause some error because this relies on the previous state and then add or remove the Items. This is not instant but it is fast however, it might cause some problems
    This is why we did the code below by using a function that takes the previous state and then add or remove the Items using concat method of arrays.
    */
    function updateCartItems(Items)
    {
        setUserCartItems(prevUserCartItems => 
        {
            //Using the concat method of array, this will add the new Items in the previous state and it will render with a new state that includes the newly removed/added items
            console.log("Total Price: "+ Items.totalPrice)
            console.log("Title: " + Items.title)
            console.log("Total Cart: "+ Items.Cart)
            return prevUserCartItems.concat(Items)
        })
    }
    function addCartQuantity(Items)
    {
        setUserCartItems(prevUserCartItems =>
            {
                console.log("Total Cart1: " + Items.Cart)
                console.log("Total Price1: " + Items.totalPrice)
                return prevUserCartItems.map((Item) => Item.id === Items.id ? {...Item, Cart: Item.Cart + 1, totalPrice: Items.price + Items.price * Item.Cart} : Item)
            })
    }
    /*
    This is the function the remove Items inside the cart. This will be activated when the cart Items hit 0 in number.
    This is the same case for the subtractCartItems. We can easily do a simple return but it will be too slow.
    */
    function subtractCartQuantity(Items)
    {
        setUserCartItems(prevUserCartItems =>
            {
                return prevUserCartItems.map((Item) => Item.id === Items.id ? {...Item, Cart: Item.Cart - 1, totalPrice: Items.price * Item.Cart - Items.price } : Item)
            })
    }
    function removeCartItems(ItemId)
    {
        setUserCartItems(prevUserCartItems =>
        {
             
            console.log("Removed!")
            //Using the filter method of array, this will return a new array that excludes the Item that is removed because the cart item hits 0.
            return prevUserCartItems.filter(Item => Item.id !== ItemId)
        })
    }
    function CheckItemInCart(ItemId)
    {
        return userCartItems.some(Item => Item.id === ItemId) //This returns a true or false when the Item is present
    }
    /*
    This is how we distribute these changes to the components which are the navigation bar,the ShopItem, the cart page. This is becasue when the user presses + or - buttons.
    The cart in the navigation bar should increase or decrease based on the clicks of the user. The cart page should also update based on the add or subtraction of items of the user
    As you can see, we have value = {context} because we will pass the context object (NOT THE CartItems but the object named "context") so that the components can access the context.
    We also have {props.children} because these will be the components that we passed to. We will now go to index.js file to wrap everything around this context so that every component
    can access this context. 
    */
    return <CartItems.Provider value = {context}>  
        {props.children}
    </CartItems.Provider>

    
}

export default CartItems; //This is important, we need to export the CartItems FIRST before anything this is why it is default. 