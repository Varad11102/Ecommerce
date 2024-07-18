import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './customer/components/Navigation/Navigation';
import MainCarosel from './customer/components/HomeCarosel/MainCarosel';
import HomePage from './customer/pages/HomePage/HomePage';
import Product from './customer/components/Product/Product';
import Footer from './customer/components/Footer/Footer';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import CheckOut from './customer/components/CheckOut/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import CustomerRouters from './Routers/CustomerRouters';
function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomerRouters/>}></Route>
      </Routes>

      <Navigation/>
    <div>
      {/* <HomePage/> */}
        {/* <Product/> */}
        {/*<ProductDetails/>*/}
        {/*<Cart/>*/}
       {/* <CheckOut/>*/}
        {/*<Order/>*/}
        <OrderDetails/>
    </div>
    <Footer/>
  
          </div>
  );
}

export default App;
