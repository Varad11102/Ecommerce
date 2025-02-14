import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage' // Corrected file path
import Cart from '../customer/components/Cart/Cart' // Corrected file path
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import CheckOut from '../customer/components/CheckOut/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation/>
        </div>
        <div>
        <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>} />
          <Route path='/product/:productId' element={<ProductDetails/>} />
          <Route path='/checkout' element={<CheckOut/>} />
          <Route path='/account/order' element={<Order/>} />
          <Route path='/account/order/:orderId' element={<OrderDetails/>} />


        {/*<Order/>*/}
        {/*<OrderDetails/>*/}

        </Routes>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default CustomerRouters;