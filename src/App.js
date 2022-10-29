import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Client } from './client/Client';
import { Admin } from './admin/Admin';
// import About from './client/pages/About';
import { Homepage } from './client/pages/Homepage';
import { Signup } from './client/pages/Signup'
import { Signin } from './client/pages/Signin'
import ProductDetail from './client/pages/ProductDetail';
import Cart from './client/pages/Cart';
import AdminHomePage from './admin/pages/AdminHomePage';
import {AdminSignin} from './admin/pages/AdminSignin';
import PaymentSuccess from './client/pages/PaymentSuccess';
import ProductList from './client/components/ProductList';
import Payment from './client/pages/Payment';
// import DemoCart from './client/pages/cart/pages/DemoCart';
// import DemoStore from './client/pages/cart/pages/DemoStore';
import PageNotFound from './client/pages/PageNotFound';
import FlavourListing from './client/pages/FlavourListing';
import AllProducts from './admin/pages/AllProducts';
import Orders from './admin/pages/Orders';
import {User} from './admin/pages/User';

function App() {
  return (
    <>

      <Routes>

        {/* Front-end Routes */}
        <Route path='/' element={<Client />}>

          <Route index element={<Homepage />} />
          {/* <Route path='about' element={<About />} /> */}
          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<Signin />} />
          <Route path='cake' element={<ProductDetail />} />
          <Route path='cart' element={<Cart />} />
          <Route path='success' element={<PaymentSuccess/>} />
          <Route path='payment' element={<Payment/>} />
          
          <Route path='success' element={<PaymentSuccess />} />

          <Route path='productdetail/:id' element={<ProductDetail />} />
          <Route path='/productlist/:flavour' element={<FlavourListing />} />
          <Route path='*' element={<PageNotFound />} />
          {/* <Route path='cart' element={<Cart />} /> */}
          <Route path='productlist' element={<ProductList />} />



          {/* democart */}

          {/* <Route path='democart' element={<DemoCart />} />
          <Route path='demostore' element={<DemoStore />} /> */}


        </Route>














        {/* admin Routes  */}
        {/* <Route path='/admin' element={<Admin />}> */}
        {/* <Route path='/admin' element={<PrivateRoute  />}> */}
        {/* <Route path='/admin' element={<Admin />}> */}

        <Route index  path='admin' element={<AdminSignin />} />
        <Route  path='admin/product' element={<AllProducts />} />
        <Route  path='admin/order' element={<Orders />} />
        <Route  path='admin/user' element={<User />} />
        <Route path='admin/dashboard' element={<AdminHomePage />} />

        {/* </Route> */}


      </Routes>


    </>
  );
}
export default App;
