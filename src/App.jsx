



import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import ManageProduct from './pages/ManageProduct';
import ManageOrders from './pages/ManageOrders';
import OrderDetails from './pages/OrderDetails';
import Layout from './components/shared/Layout';

// import { UserContextProvider } from './contexts/ContextProvider';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/manage-product' element={<ManageProduct />} />
          <Route path='/manage-order' element={<ManageOrders />} />
          <Route path='/manage-order/order-details' element={<OrderDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
