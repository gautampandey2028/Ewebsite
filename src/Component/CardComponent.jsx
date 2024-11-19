
import React, { useState ,useContext, useEffect} from "react";
import { CartContext } from "./CartProvider";
import { Link, useNavigate } from "react-router-dom";


import './Cart.css'

const Cart = () => {
  const navigate = useNavigate();
  useEffect(()=>{
   let userDetails = JSON.parse(sessionStorage.getItem('userdetails'));
   if(userDetails){

   }else{
    navigate('/login')
   }
  },[])
    const { cart } = useContext(CartContext); 
   
    const [cartItems, setCartItems] = useState([
]);

    useEffect(()=>{
        const results = cart.reduce(function(results, org) {
            (results[org.id] = results[org.id] || []).push(org);
            return results;
        }, {});
        let keys = Object.keys(results);
        let resultArray = [];
        keys.forEach((ele,index)=>{
            let obj = {};
            obj.id = results[ele][0].id;
            obj.name = results[ele][0].title;
            obj.price = results[ele][0].price;
            obj.quantity = results[ele].length
            resultArray.push(obj);
        });
        setCartItems(resultArray);
        if(document.getElementsByClassName('cart')){
document.getElementsByClassName('cart')[0].style.display='none'
        }
        
    },[cart])



  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,0
    ).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
            onRemove={handleRemoveItem}
          />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <h3>Total: ${calculateTotalPrice()}</h3>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Link to="/shop">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full">
             BUY NOW
            </button>
          </Link>
      </div>
      
      
    </div>
    
  );
};

export default Cart;




const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <div>
        <button onClick={() => onIncrease(item.id)}>+</button>
        <button onClick={() => onDecrease(item.id)} disabled={item.quantity <= 1}>-</button>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};


