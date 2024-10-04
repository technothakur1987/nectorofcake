import React from 'react'
import { Link } from 'react-router-dom'


const Cart = () => {
  return (
    <div className="fixed inset-0 bg-[#361513] bg-opacity-90 flex items-center justify-center z-50 font-Playfair">
    {/* Modal content */}
    <div className="bg-[#f8f1e1] w-[98%] h-[98%] p-8 rounded-lg shadow-lg relative admin">
      <Link
        to="/"
        className="absolute end-5 top-5 transform transition-transform duration-100 hover:rotate-90"
      >
        <i className="ri-close-line text-[#8b4513] text-4xl font-black "></i>
      </Link>
      <h2>CartPage</h2>
      
      
    </div>
  </div>
  )
}

export default Cart