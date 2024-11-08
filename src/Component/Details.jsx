import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartProvider";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { addToCart } = useContext(CartContext); 
  


  useEffect(() => {
    fetchData1();
  }, []);

  const fetchData1 = async () => {
    const resolve = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await resolve.json();
    console.log(result);
    setDetails(result);  // Fixed: result itself contains the product details, not result.products
  };

 /*  const addToCart = () => {
    setCart((prevCart) => [...prevCart, details]);
    alert(`${details.title} has been added to the cart!`);
  }; */

  return (
    <>
      <div className="w-72 border border-solid bg-slate-50 m-10 rounded-xl text-black justify-center text-start font-bold p-6">
        <div className="justify-center">
          <button className="bg-black rounded-lg text-white px-4 shadow-lg m-5" onClick={() => addToCart(details)}>
            ADD TO CART
          </button>
          <h3>BRAND -- {details?.brand}</h3>
          <h3>CATEGORY -- {details?.category}</h3>
          <h4>PRICE -- ${details?.price}</h4>
          <h4>RATING -- {details?.rating}</h4>
          <h5>MORE ABOUT OUR PRODUCT -- {details?.description}</h5>
        </div>
      </div>
    </>
  );
};

export default Details;
