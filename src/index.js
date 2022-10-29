import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import {CartProvider} from '../src/client/pages/cart/components/DemoCart'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    {/* <CartProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </CartProvider> */}
  </React.StrictMode>

);


