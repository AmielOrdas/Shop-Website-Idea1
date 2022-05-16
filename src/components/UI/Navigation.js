import React from 'react'
import {Link} from "react-router-dom"
import classes from "./Navigation.module.css"
function Navigation() {
  return (
    <header className={classes.header}>
        <h1>My website</h1> 
        <nav>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/Shop">Shop</Link>
                </li>
                <li>
                    <Link to = "/Cart">Cart</Link>
                </li>
            </ul>    
        </nav>
    </header>
    
    
  )
}

export default Navigation
