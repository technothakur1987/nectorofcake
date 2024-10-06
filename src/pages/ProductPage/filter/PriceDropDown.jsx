import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchPrice,filterFunction } from '../../../store/CakeSlice';


const PriceDropDown = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cakeSlice);
  

  // Extract unique prices from products and round them to the nearest hundred
  const uniquePrices = [...new Set(products.map(product => Math.round(product.price / 100) * 100))];
  

  // Create dropdown options from the unique rounded prices
  const priceOptions = uniquePrices.sort((a, b) => a - b).map(price => ({
    label: `Rs ${price}`, // Option label
    value: price,       // Option value
  }));

  const onPriceChange = (e)=>{
    console.log(e.target.value)
    dispatch(setSearchPrice(Number(e.target.value)));
    dispatch(filterFunction());

  }

  return (
    <div className="">
      <select
        onChange={(e) => onPriceChange(e)} // Call the parent function on change
        className=" md:w-[18vw] border focus:outline-none text-[#8b4513] focus:ring-2 focus:ring-[#8b4513] p-2 w-full rounded-md bg-[#f8f1e1]  "
      >
        <option value={0}>Select a price range</option>
        {priceOptions.map((option, index) => (
          <option key={index} value={option.value}>
          less than  {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceDropDown;
