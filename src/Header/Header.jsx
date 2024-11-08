import React, { useContext, useEffect, useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom'
import { CartContext } from "../Component/CartProvider";

const Header = () => {
  const navigate = useNavigate();
  const [isAuth,setIsAuth]= useState(false);
  const logoutAction = () =>{
    sessionStorage.removeItem('userdetails');
    navigate('/login');
  }
  useEffect(()=>{
    let userDetails = JSON.parse(sessionStorage.getItem('userdetails'));
    if(userDetails){
      setIsAuth(true)
    }else{
    setIsAuth(false)
    }
   },[sessionStorage.getItem('userdetails')])
  const { cart } = useContext(CartContext); 
  return (
    <>
      <div className="flex justify-between bg-neutral-100 shadow-sm sticky top-0">
        <div className="logo-container">
          <img className="w-28"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLs8YB2TLDzUK-jGNKtgLhMNWvuG2S0L5oVCYr4WrCSv617ZsPjm0M1QS1CLyujbZTrMc&usqp=CAU"
            alt=""
          />
        </div>
        <div className="flex align-bottom" >
          <ul className="flex p-5 m-5 m ">
            <li className="px-6 hover:text-lg"  >
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li className="px-6 6 hover:text-lg" >
            <NavLink to='/contact' >CONTACT</NavLink>
            </li>
            <li className="px-6 6 hover:text-lg" >
            <NavLink to='/about' >ABOUT</NavLink>
            </li>
            <li className="px-6 6 hover:text-lg" >
            <NavLink to='/shop' >SHOP NOW</NavLink>
            </li>
            <NavLink to='/cartprovider' >CART({cart.length})</NavLink>
           {/*  <li className="px-6">CART({cart.length})</li> */}
           {
            !isAuth ? <li className="px-6 6 hover:text-lg" >
            <NavLink to='/login'  >LOGIN</NavLink>
            </li> :<li onClick={logoutAction} className="px-6 6 hover:text-lg" >
            Logout
            </li>
           }
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
