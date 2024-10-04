import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchName,filterFunction } from '../../../store/CakeSlice';

const SearchbyName = () => {
    const dispatch = useDispatch();
    const { loader, products, filteredProducts } = useSelector((state) => state.cakeSlice);
    const [title, setTitle] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setTitle(value);
        
        // Dispatch the searchByName action with the current input

        setTimeout(()=>{
            dispatch(setSearchName(value));
            dispatch(filterFunction());
        },1000)
        
       
    };

    

    return (
        <div>
            <input
                type="text"
                name="searchbyname"
                id="searchbyname"
                value={title}
                className='w-[35vw] border focus:outline-none text-[#8b4513] focus:ring-2 focus:ring-[#8b4513] p-2 rounded-md bg-[#f8f1e1]'
                placeholder='Search by Name'
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchbyName;
