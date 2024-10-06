import React,{useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './GlobalCompo/Navbar'
import Product from './pages/ProductPage/Product'
import ConnectUs from './pages/ConnectUs/ConnectUs'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ScrollToTop from './GlobalCompo/ScollTotop'
import Footer from './GlobalCompo/Footer'

import { useDispatch, useSelector } from "react-redux";

import { fetchTestinomials ,fetchProducts} from "./store/CakeSlice"
import Login from './GlobalCompo/Login'
import SignUp from './GlobalCompo/SignUp'
import User from './user/user'
import Admin from './admin/Admin'
import Cart from './GlobalCompo/Cart'
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import ProductDetails from './pages/ProductDetails/ProductDetails'






const App = () => {

  const dispatch = useDispatch();
  const { loader ,testimonials,products} = useSelector(
    (state) => state.cakeSlice
  );
  


  useEffect(() => {
 dispatch(fetchTestinomials());
 dispatch(fetchProducts());
   
  }, [dispatch]);
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ProductsPage' element={<Product/>}/>
      <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
      <Route path='/ConnectUs' element={<ConnectUs/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/User' element={<User/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
      
      <Footer/>
      <ToastContainer 
        position="top-right" // Position of the toast
        autoClose={5000} // Auto close duration
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Newest toast on top
        closeOnClick // Close on click
        rtl={false} // Right to left
        pauseOnFocusLoss // Pause on focus loss
        draggable // Allow dragging
        pauseOnHover // Pause on hover
        style={{ zIndex: 99, position:'fixed' }} 
       
      />
      </BrowserRouter>
    

    
    
    </>
  )
}

export default App