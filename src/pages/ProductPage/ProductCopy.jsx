import React, { useEffect, useState } from "react";
import video from "../../assets/video5.mp4";
import { useSelector } from "react-redux";
import Loader from "../../GlobalCompo/Loader";

const Product = () => {
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loader, products } = useSelector((state) => state.cakeSlice);
  console.log(products)
  const itemsPerPage = 6; // Number of products to display per page
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  // Calculate the starting index of the products for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  
  // Slice the products array to get the current page's products
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="font-Playfair">
      <div className="shopHeader h-[40vh] md:h-[60vh] w-[100vw] bg-[#8b4513] relative overflow-hidden">
        <video
          src={video}
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover brightness-[70%]"
        />

        <div className="absolute w-full h-[13vh] top-0 left-0 bg-[#e3d0c269]"></div>
        <img
          src="https://i.ibb.co/kcgyhPx/beeflap.gif"
          alt="bee"
          className="absolute h-[30%] right-[4%] top-[50%] imagedropfilter z-[14]"
        />
        <img
          src="https://i.ibb.co/kcgyhPx/beeflap.gif"
          alt="bee"
          className="absolute h-[30%] left-[5%] top-[50%] imagedropfilter rotateY180 z-[18]"
        />
        <div className="absolute w-full min-h-[13vh] bottom-0 left-0 flex justify-center items-center">
          <h2 className="text-6xl md:text-9xl font-black text-[#e6ab0b] uppercase text-center">
            Our Delicacies
          </h2>
        </div>
      </div>

      <div className="min-h-screen bg-[#eece76] pt-5 pb-[25vh] px-[5vw]">
        {
          products.length > 0 ?<h2 className="text-[#361513] text-3xl md:text-5xl font-bold mb-5 text-center uppercase ">
          Explore Our Best Offerings
        </h2>:''
        }
      
        {/* Showing Loader if it's true */}
        {loader && (
          <div className="py-5 w-full flex justify-center items-center">
            <Loader color="border-[#8b4513]" />
          </div>
        )}

        {/* Showing products */}
        <div className="flex flex-wrap items-stretch justify-start">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div className="basis-1/3 min-h-[40vh] p-5 flex" key={product.id}>
                <div className="flex flex-col bg-[#361513] rounded-lg w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[30vh] imagedropfilter mb-3 mx-auto object-cover"
                  />
                  <h2 className="text-center text-2xl font-bold text-[#eece76] uppercase mb-1">
                    {product.title}
                  </h2>
                  <p className="text-center text-xl font-bold text-[#eece76] mx-5 mb-2">
                    {product.ingredients.join(", ")} {/* Display ingredients dynamically */}
                  </p>
                  <div className="flex items-center justify-between px-5 py-5">
                    <button className="text-sm font-bold text-[#361513] bg-[#eece76] px-4 rounded-lg py-2 border border-1 border-[#eece76] hover:bg-[#361513] hover:text-[#eece76] transition duration-500 ease cursor-pointer">
                      Know More
                    </button>
                    <button className="text-sm font-bold text-[#361513] bg-[#eece76] px-4 rounded-lg py-2 border border-1 border-[#eece76] hover:bg-[#361513] hover:text-[#eece76] transition duration-500 ease cursor-pointer">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-5 w-full flex justify-center items-center">
              <h2 className="text-[#361513] text-3xl md:text-5xl font-bold mb-5 text-center uppercase">
                NO Products To Show
              </h2>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {
          products.length > 0 ? <div className="flex justify-center mt-5">
          <button 
            onClick={handlePrevPage} 
            className="mx-2 px-4 py-2 bg-[#361513] text-[#eece76] rounded-lg disabled:opacity-50" 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2 text-xl">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={handleNextPage} 
            className="mx-2 px-4 py-2 bg-[#361513] text-[#eece76] rounded-lg disabled:opacity-50" 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>:''
        }
       
      </div>
    </div>
  );
};

export default Product;
