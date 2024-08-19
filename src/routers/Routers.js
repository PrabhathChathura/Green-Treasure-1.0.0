// src/routers/Routers.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProtectedRoute from '../routers/ProtectedRoute';
import AdminRoute from '../components/AdminRoute';
import AddProducts from '../admin/AddProducts';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';
import Operation from '../admin/Operation';

import CheckOutSuccess from '../components/CheckOutSuccess';
import CheckOutFail from '../components/CheckOutFail.jsx';


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='cart' element={<Cart />} />
      

      <Route path='/*' element={<ProtectedRoute />}>
        <Route path='checkout' element={<Checkout />} />
      </Route>

      <Route path='/dashboard/*' element={<AdminRoute />}>
        <Route path='' element={<Dashboard />} />
        <Route path='all-products' element={<AllProducts />} />
        <Route path='add-product' element={<AddProducts />} />
        <Route path='users' element={<Users />} />
        <Route path='operation' element={<Operation />} /> 
      </Route>
      
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />

      <Route path='/success' element={<CheckOutSuccess />} />
      <Route path='/cancel' element={<CheckOutFail />} />


    </Routes>
  );
};

export default Routers;