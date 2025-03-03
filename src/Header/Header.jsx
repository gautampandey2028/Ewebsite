import React, { useContext, useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../Component/CartProvider";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const userDetails = JSON.parse(sessionStorage.getItem("userdetails"));
    setIsAuth(userDetails ? true : false);
  }, [sessionStorage.getItem("userdetails")]);

  const { cart } = useContext(CartContext);

  const logoutAction = () => {
    sessionStorage.removeItem("userdetails");
    setIsAuth(false);
    navigate("/login");
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center bg-neutral-100 shadow-sm sticky top-0 z-10 px-4 py-2">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="w-20" // Smaller logo
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLs8YB2TLDzUK-jGNKtgLhMNWvuG2S0L5oVCYr4WrCSv617ZsPjm0M1QS1CLyujbZTrMc&usqp=CAU"
          alt="Logo"
        />
      </div>

      {/* Navigation Menu */}
      <div className="flex-1">
        <ul className="flex justify-evenly items-center text-black font-semibold text-sm"> 
          <li>
            <NavLink to="/" className="hover:text-blue-500 transition duration-200">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-red-500 transition duration-200">
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-green-500 transition duration-200">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="hover:text-purple-500 transition duration-200">
              SHOP NOW
            </NavLink>
          </li>

          {/* Cart */}
          <li className="flex items-center space-x-1">
            <NavLink to="/cartprovider" className="flex items-center hover:text-gray-600 transition duration-200">
              <ShoppingCartIcon className="w-5 h-5" /> {/* Smaller icon */}
              <span className="text-xs">({cart.length})</span>
            </NavLink>
          </li>

          {/* Dropdown Menu */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 transition duration-300 text-xs"
            >
              <UserIcon className="w-4 h-4 mr-1" /> {/* Smaller icon */}
              Account
            </button>

            {/* Dropdown Content */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white shadow-lg rounded-md py-1 text-sm">
                {!isAuth ? (
                  <NavLink
                    to="/login"
                    className="block px-4 py-1 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    LOGIN
                  </NavLink>
                ) : (
                  <button
                    onClick={logoutAction}
                    className="block w-full text-left px-4 py-1 text-gray-700 hover:bg-gray-100"
                  >
                    LOGOUT
                  </button>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
