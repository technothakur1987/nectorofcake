import { createSlice } from "@reduxjs/toolkit";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig"; // Update the path if necessary

const initialState = {
  loader: true,
  testimonials: [],
  products: [],
  filteredProducts: [],
  searchCat:'All',
  searchname:'All',
  searchPrice:0,
};

const cakeSlice = createSlice({
  name: "cakeSlice",
  initialState,
  reducers: {
    setTestinomials: (state, action) => {
      state.testimonials = action.payload;
      state.loader = false;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loader = false;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
      state.loader = false;
    },
    setSearchName: (state, action) => {
        state.searchname = action.payload.toLowerCase() || 'All'
    },
    setSearchCat:(state, action)=>{
      state.searchCat = action.payload

    },
    setSearchPrice:(state, action)=>{
      state.searchPrice = action.payload

    }, 
    filterFunction:(state, action)=>{
        console.log(state.searchname)
        console.log(state.searchCat)
        console.log(state.searchPrice)

        const allProducts = state.filteredProducts; // Original product list

        // Reset to all products if all search filters are default
      if (state.searchname === 'All' && state.searchCat === 'All' && state.searchPrice === 0) {
        state.filteredProducts = allProducts;
        return;
      }

      // When only the name is filtered
      if (state.searchname !== 'All' && state.searchCat === 'All' && state.searchPrice === 0) {
        state.filteredProducts = allProducts.filter(product =>
          product.title.toLowerCase().includes(state.searchname.toLowerCase())
        );
        return;
      }

      // When only the category is filtered
      if (state.searchname === 'All' && state.searchCat !== 'All' && state.searchPrice === 0) {
        state.filteredProducts = allProducts.filter(product => 
          product.category === state.searchCat
        );
        return;
      }

      // When only the price is filtered
      if (state.searchname === 'All' && state.searchCat === 'All' && state.searchPrice > 0) {
        state.filteredProducts = allProducts.filter(product => 
          product.price <= state.searchPrice
        );
        return;
      }

      // When both name and category are filtered
      if (state.searchname !== 'All' && state.searchCat !== 'All' && state.searchPrice === 0) {
        state.filteredProducts = allProducts.filter(product =>
          product.title.toLowerCase().includes(state.searchname.toLowerCase()) &&
          product.category === state.searchCat
        );
        return;
      }

      // When both name and price are filtered
      if (state.searchname !== 'All' && state.searchCat === 'All' && state.searchPrice > 0) {
        state.filteredProducts = allProducts.filter(product =>
          product.title.toLowerCase().includes(state.searchname.toLowerCase()) &&
          product.price <= state.searchPrice
        );
        return;
      }

      // When both category and price are filtered
      if (state.searchname === 'All' && state.searchCat !== 'All' && state.searchPrice > 0) {
        state.filteredProducts = allProducts.filter(product =>
          product.category === state.searchCat &&
          product.price <= state.searchPrice
        );
        return;
      }

      // When name, category, and price are all filtered
      if (state.searchname !== 'All' && state.searchCat !== 'All' && state.searchPrice > 0) {
        state.filteredProducts = allProducts.filter(product =>
          product.title.toLowerCase().includes(state.searchname.toLowerCase()) &&
          product.category === state.searchCat &&
          product.price <= state.searchPrice
        );
        return;
      }
      // Fallback (default to all products if no other conditions match)
      state.filteredProducts = allProducts;
    },
    
  



    
   
  },
});

export const {
  setTestinomials,
  setProducts,
  setFilteredProducts,
  setSearchName,
  setSearchCat,
  setSearchPrice,
  filterFunction
  
} = cakeSlice.actions;
export default cakeSlice.reducer;

/*function to fetch testinomials */
export const fetchTestinomials = () => async (dispatch) => {
  try {
    const q = query(collection(fireDB, "testimonials"), orderBy("id"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let testinomialsArray = [];
      QuerySnapshot.forEach((doc) => {
        testinomialsArray.push({ ...doc.data() });
      });
      dispatch(setTestinomials(testinomialsArray));
    });
    return () => unsubscribe();
  } catch (error) {
    console.log(error.message);
  }
};

/*function to fetch products */
export const fetchProducts = () => async (dispatch) => {
  try {
    const q = query(collection(fireDB, "products"), orderBy("id"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let productsArray = [];
      QuerySnapshot.forEach((doc) => {
        productsArray.push({ ...doc.data() });
      });
      dispatch(setProducts(productsArray));
      dispatch(setFilteredProducts(productsArray));
    });
    return () => unsubscribe();
  } catch (error) {
    console.log(error.message);
  }
};
