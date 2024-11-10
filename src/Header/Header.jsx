import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from "../Component/CartProvider";


const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const logoutAction = () => {
    console.log("Logging out..."); 
    sessionStorage.removeItem('userdetails');
    navigate('/login')
  };
   
  useEffect(() => {
    const userDetails = JSON.parse(sessionStorage.getItem('userdetails'));
    console.log('User Details:', userDetails);
    setIsAuth(userDetails ? true : false);
  }, [sessionStorage.getItem('userdetails')]);

  const { cart } = useContext(CartContext); 

  return (
    <>
      <div className="flex justify-between bg-neutral-100 shadow-sm sticky top-0">
        <div className="logo-container">
          <img className="w-28"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLs8YB2TLDzUK-jGNKtgLhMNWvuG2S0L5oVCYr4WrCSv617ZsPjm0M1QS1CLyujbZTrMc&usqp=CAU"
            alt="Logo"
          />
        </div>
        <div className="flex align-bottom">
          <ul className="flex p-5 m-5">
            <li className="px-6 hover:text-lg">
              <NavLink to='/'>HOME</NavLink>
            </li>
            <li className="px-6 hover:text-lg">
              <NavLink to='/contact'>CONTACT</NavLink>
            </li>
            <li className="px-6 hover:text-lg">
              <NavLink to='/about'>ABOUT</NavLink>
            </li>
            <li className="px-6 hover:text-lg">
              <NavLink to='/shop'>SHOP NOW</NavLink>
            </li>
            <NavLink to='/cartprovider'>CART({cart.length})</NavLink>
            {!isAuth ? (
              <li className="px-6">
                <NavLink to='/login'className='bg-black text-white p-2 rounded-lg'  >LOGIN</NavLink>
              </li>
            ) : (
              <li onClick={logoutAction} className="px-6 hover:text-lg" >
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>

     
    </>
  );
};

export default Header;
