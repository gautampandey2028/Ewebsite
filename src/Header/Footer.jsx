import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* First Column */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                <span className="text-red-500">OUR</span> SERVICES
              </h3>
              <p className="text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum ea quo ex ullam laboriosam magni totam, facere eos iure
                voluptate.
              </p>
              <div className="mt-4 flex space-x-4 text-xl">
                <i className="fa-brands fa-facebook hover:text-blue-600"></i>
                <i className="fa-brands fa-twitter hover:text-blue-400"></i>
                <i className="fa-brands fa-instagram hover:text-pink-500"></i>
                <i className="fa-brands fa-linkedin-in hover:text-blue-700"></i>
              </div>
            </div>

            {/* Second Column */}
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h5 className="text-xl font-semibold mb-4">Links</h5>
              <ul className="space-y-2">
                <li>
                  <NavLink to="/" className="hover:text-gray-300">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-gray-300">
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-gray-300">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-gray-300">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-gray-300">
                    Portfolio
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Third Column */}
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h5 className="text-xl font-semibold mb-4">FOLLOW US</h5>
              <p className="text-gray-400">
                <i className="fa-solid fa-phone-volume"></i> +92 3121324083
              </p>
              <div className="flex space-x-4 text-2xl mt-4">
                <i className="bi bi-whatsapp hover:text-green-500"></i>
                <i className="bi bi-twitter hover:text-blue-400"></i>
                <i className="bi bi-linkedin hover:text-blue-700"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 text-center py-4">
        <p className="text-gray-500">@copy Right gautam pandey</p>
      </div>
    </>
  );
};

export default Footer;
