import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartProvider";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { cart, addToCart } = useContext(CartContext); // Get cart & addToCart function

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await response.json();
    setDetails(result);
  };

  // Check if the item is already in the cart
  const isInCart = cart.some((item) => item.id === details.id);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 border border-solid bg-white shadow-lg rounded-xl text-black font-bold p-6 text-center">
        <button
          className={`px-6 py-2 shadow-lg mb-4 rounded-lg ${
            isInCart ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white"
          }`}
          onClick={() => !isInCart && addToCart(details)} // Prevent adding if already in cart
          disabled={isInCart}
        >
          {isInCart ? "Already in Cart" : "ADD TO CART"}
        </button>
        
        <h3 className="text-lg">BRAND: {details?.brand}</h3>
        <h3 className="text-lg">CATEGORY: {details?.category}</h3>
        <h4 className="text-lg">PRICE: ${details?.price}</h4>
        <h4 className="text-lg">RATING: {details?.rating}</h4>
        <h5 className="text-sm text-gray-700">MORE ABOUT OUR PRODUCT: {details?.description}</h5>
      </div>
    </div>
  );
};

export default Details;
