import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from "../Component/CartProvider";
import { ShoppingCartIcon } from '@heroicons/react/24/outline'; // Importing cart icon from Heroicons

const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const logoutAction = () => {
    console.log("Logging out..."); 
    sessionStorage.removeItem('userdetails');
    navigate('/login');
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
          <img
            className="w-28"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLs8YB2TLDzUK-jGNKtgLhMNWvuG2S0L5oVCYr4WrCSv617ZsPjm0M1QS1CLyujbZTrMc&usqp=CAU"
            alt="Logo"
          />
        </div>
        <div className="flex align-bottom">
          <ul className="flex p-5 m-5">
            <li className="px-6">
              <NavLink
                to="/"
                className="hover:text-blue-500 hover:font-semibold transition duration-200"
              >
                HOME
              </NavLink>
            </li>
            <li className="px-6">
              <NavLink
                to="/contact"
                className="hover:text-red-500 hover:font-semibold transition duration-200"
              >
                CONTACT
              </NavLink>
            </li>
            <li className="px-6">
              <NavLink
                to="/about"
                className="hover:text-green-500 hover:font-semibold transition duration-200"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="px-6">
              <NavLink
                to="/shop"
                className="hover:text-purple-500 hover:font-semibold transition duration-200"
              >
                SHOP NOW
              </NavLink>
            </li>
            <li className="flex items-center px-6 hover:text-gray-600 transition duration-200">
              <NavLink
                to="/cartprovider"
                className="flex items-center space-x-1"
              >
                <ShoppingCartIcon className="w-6 h-6" /> {/* Cart Icon */}
                <span>({cart.length})</span>
              </NavLink>
            </li>
            {!isAuth ? (
              <li className="px-6">
                <NavLink
                  to="/login"
                  className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition duration-200"
                >
                  LOGIN
                </NavLink>
              </li>
            ) : (
              <li
                onClick={logoutAction}
                className="px-6 hover:text-red-500 cursor-pointer transition duration-200"
              >
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
