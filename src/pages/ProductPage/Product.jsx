import React, { useEffect, useState } from "react";
import video from "../../assets/video5.mp4";
import { useSelector } from "react-redux";
import Loader from "../../GlobalCompo/Loader";
import SearchbyName from "./filter/SearchbyName";
import CategoryDropDown from "./filter/CategoryDropDown";
import PriceDropDown from "./filter/PriceDropDown";
import { useNavigate } from "react-router-dom";
import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Product = () => {
  const navigate = useNavigate();

  const { loader, products, filteredProducts } = useSelector(
    (state) => state.cakeSlice
  );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products per page

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get current products for the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const DisPrice = (price) => {
    const randomDiscount = Math.floor(Math.random() * (30 - 5 + 1)) + 5;
    const discountAmount = (randomDiscount / 100) * price;
    const finalPrice = price + discountAmount;
    return Math.round(finalPrice);
  };
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filteredProducts, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const openProductDetailPage = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <div className="font-Playfair">
      <div className="shopHeader h-[40vh] lg:h-[60vh] w-[100vw] bg-[#8b4513] relative overflow-hidden">
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
          <h2 className="text-6xl md:text-7xl lg:text-9xl font-black text-[#e6ab0b] uppercase text-center">
            Our Delicacies
          </h2>
        </div>
      </div>

      <div className="min-h-screen bg-[#eece76] pt-5 pb-[25vh] px-[5vw]">
        {loader && (
          <div className="py-5 w-full flex justify-center items-center">
            <Loader color="border-[#8b4513]" />
          </div>
        )}

        {/*Showing filters only when loading is done */}
        {!loader && (
          <div className="flex items-center flex-wrap md:px-5 ">
            <div className=" basis-full md:basis-1/2 flex justify-start gap-2 md:gap-5    ">
              <CategoryDropDown />
              <PriceDropDown />
            </div>
            <div className="basis-full md:basis-1/2 flex justify-center md:justify-end">
              <SearchbyName />
            </div>
          </div>
        )}

        {/* Showing current products */}
        <div className="flex flex-wrap items-stretch justify-start  ">
          {currentProducts.length > 0 && !loader ? (
            currentProducts.map((product) => (
              <div
                className="md:basis-1/3 min-h-[40vh] mb-7 md:mb-[initial] py-0 px-0 md:py-5 md:px-5 flex"
                key={product.id}
              >
                <div className="flex flex-col bg-[#361513] rounded-lg w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[30vh] md:h-[10vh] lg:h-[30vh] imagedropfilter mb-3 mx-auto object-cover"
                  />
                  <div className="absolute py-2 ps-2">
                    <Rating
                      style={{ maxWidth: "7vw" }}
                      value={product.rating}
                      readOnly
                      itemStyles={{
                        itemShapes: ThinStar,
                        activeFillColor: "#e6ab0b",
                        inactiveFillColor: "#eece76",
                      }}
                    />
                  </div>

                  <h2 className="text-center text-2xl font-bold text-[#eece76] uppercase mb-1">
                    {product.title}
                  </h2>
                  <h2 className="text-center text-2xl font-normal text-[#eece76] mb-3">
                    Rs{" "}
                    <span className="line-through text-[#d1a35a] text-lg font-light">
                      {DisPrice(Number(product.price))}
                    </span>{" "}
                    <span className="text-[#f5cd79] font-semibold text-2xl">
                      {product.price}
                    </span>{" "}
                    /- per KG
                  </h2>
                  <p className="text-center text-xl font-bold text-[#eece76] mx-5 md:mx-0 lg:mx-5 mb-2">
                    {product.ingredients.join(", ")}
                  </p>
                  <div className="flex items-center justify-between px-5 md:px-1 lg:px-5 py-5 gap-2 h-full ">
                    <button
                      className="text-sm font-bold text-[#361513] bg-[#eece76] px-4 rounded-lg py-2 border border-1 border-[#eece76] hover:bg-[#361513] hover:text-[#eece76] transition duration-500 ease cursor-pointer"
                      onClick={() => openProductDetailPage(product.id)}
                    >
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
            <div className="py-28 w-full flex justify-center items-center">
              <h2 className="text-[#361513] text-3xl md:text-5xl font-bold mb-5 text-center uppercase">
                NO Products To Show
              </h2>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {currentProducts.length > 0 && (
          <div className="flex justify-center items-center mt-10 gap-5">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-5 py-1 text-lg font-bold rounded-lg border transition-all duration-300 ease-in-out 
          ${
            currentPage === 1
              ? "bg-[#eece76] text-[#361513] border-[#361513] opacity-[0.5] cursor-not-allowed"
              : "bg-[#eece76] text-[#361513] border-[#361513] hover:bg-[#361513] hover:text-[#eece76] cursor-pointer"
          }`}
            >
              <i className="ri-arrow-left-double-fill text-2xl"></i>
            </button>

            <span className="px-4 py-2 text-xl font-bold text-[#361513]">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-5 py-1 text-lg font-bold rounded-lg border transition-all duration-300 ease-in-out 
          ${
            currentPage === totalPages
              ? "bg-[#eece76] text-[#361513] border-[#361513] opacity-[0.5] cursor-not-allowed"
              : "bg-[#eece76] text-[#361513] border-[#361513] hover:bg-[#361513] hover:text-[#eece76] cursor-pointer"
          }`}
            >
              <i className="ri-arrow-right-double-fill text-2xl"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
