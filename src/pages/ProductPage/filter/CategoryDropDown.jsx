import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setSearchCat,filterFunction } from '../../../store/CakeSlice';


const CategoryDropDown = () => {
  const dispatch = useDispatch();
  const { loader, products } = useSelector((state) => state.cakeSlice);
  const [cat, setCat] = useState('')

  // Extract unique categories from products
  const categoryArray = [...new Set(products.map((product) => product.category))];

  const onCategoryChange = (e)=>{
   
    setCat(e.target.value)
    
      dispatch(setSearchCat(e.target.value));
      dispatch(filterFunction())
  

  }

  return (
    <div>
      <select
        onChange={(e) => onCategoryChange(e)} // Call the parent function on change
        className="border md:w-[18vw] focus:outline-none text-[#8b4513] focus:ring-2 focus:ring-[#8b4513] p-2 w-full rounded-md bg-[#f8f1e1]  "
      >
        <option value="All">Select a category</option>
        {categoryArray.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropDown;
