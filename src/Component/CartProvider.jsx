import React, { createContext, useState } from "react";
import Cart from "./CardComponent";
import { useLocation } from "react-router-dom";

import {NavLink} from 'react-router-dom'

// Create a Context
export const CartContext = createContext();

// Create a Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const location = useLocation();
  console.log('location=====>',location);


  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
      {location.pathname==='/cartprovider' ?  <Cart/> : null}

    </CartContext.Provider>
  );
};

