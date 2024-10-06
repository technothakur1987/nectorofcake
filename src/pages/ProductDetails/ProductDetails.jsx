import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Accessing the id parameter from the route
  const { products } = useSelector((state) => state.cakeSlice);

  // Find the product based on the id
  const product = products.find((product) => product.id === (id)); // If id is a number

  console.log(product);

  return (
    <div className="fixed inset-0 bg-[#361513] bg-opacity-90 flex items-center justify-center z-50 font-Playfair">
      {/* Modal content */}
      <div className="bg-[#f8f1e1] w-[98%] h-[98%] p-8 rounded-lg shadow-lg relative admin">
        <button
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="absolute end-5 top-5 transform transition-transform duration-100 hover:rotate-90"
        >
          <i className="ri-close-line text-[#8b4513] text-4xl font-black "></i>
        </button>
        <h2>Product Details </h2>
        {product ? (
          <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: Rs {product.price}</p>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
