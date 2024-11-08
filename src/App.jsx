import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Component/HOME.JSX';
import Details from './Component/Details';
const Contact = lazy(() => import('./Component/Contact'));
const About = lazy(()=>import('./Component/About'))
import { CartProvider } from './Component/CartProvider';
import Footer from './Header/Footer';
import Shop from './Component/Shop';
import Login from './auth/login';
import Register from './auth/Register';

const App = () => {
  return (
     <>
       <BrowserRouter>
    <CartProvider>
    
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route path='/about' element={
            <Suspense fallback={<div>Loading...</div>} >
              <About/>
            </Suspense>
          }  />
          <Route path='/cartprovider' element={<CartProvider/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
       
     
      </CartProvider> 
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
