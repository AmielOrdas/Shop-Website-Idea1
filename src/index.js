import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import {BrowserRouter} from "react-router-dom"
//We did {CartItemsProvider} because we need to pass the component, not the context object so we can wrap everything with the provider component so that everything can access it.
import {CartItemsProvider} from "./context/CartItems"; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartItemsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartItemsProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

