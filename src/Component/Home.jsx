import React from "react";
import { Link } from "react-router-dom";
//import shop from './Shop';
//import Shop from './Shop';
//import './App.css'; // Make sure to import your Tailwind CSS here

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center  "
        style={{
          backgroundImage: `url('https://web-e-com.netlify.app/images/slider-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-6">
            Find the best deals on the products you love
          </p>
          <Link to="/shop">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full">
              SHOP NOW
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
     

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us</h2>
          <p className="text-lg mb-6">
            Get the latest updates on new products and upcoming sales
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="text-gray-900 py-2 px-4 rounded-l-lg focus:outline-none"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-r-lg">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
