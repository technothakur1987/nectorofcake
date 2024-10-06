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
        console.log(state.filteredProducts)

        

        // Reset to all products if all search filters are default
      if (state.searchname === 'All' && state.searchCat === 'All' && state.searchPrice === 0) {
        console.log('no filter')
        state.filteredProducts = state.products
        console.log(state.filteredProducts)
       
      }

      // When only the name is filtered CORRECT
      else if (state.searchname !== 'All' && state.searchCat === 'All' && state.searchPrice === 0) {
        console.log('name filter')
        state.filteredProducts = state.products.filter(product =>
          product.title.toLowerCase().includes(state.searchname.toLowerCase())
        );
        console.log(state.filteredProducts)
       
      }

      // When only the category is filtered CORRECT
      else if (state.searchname === 'All' && state.searchCat !== 'All' && state.searchPrice === 0) {
        console.log('category filter')
        state.filteredProducts = state.products.filter(product => 
          product.category === state.searchCat
        );
        console.log(state.filteredProducts)
        
      }

      // When only the price is filtered CORRECT
     else if (state.searchname === 'All' && state.searchCat === 'All' && state.searchPrice > 0) {
        console.log('price filter')
        state.filteredProducts = state.products.filter(product => 
          product.price <= state.searchPrice
        );
        console.log(state.filteredProducts)
       
      }

      // When both name and category are filtered CORRECT
      else if (state.searchname !== 'All' && state.searchCat !== 'All' && state.searchPrice === 0) {
        console.log('name and category filter')
        state.filteredProducts = state.products.filter(product =>
          product.title.toLowerCase().includes(state.searchname.toLowerCase()) &&
          product.category === state.searchCat
        );
        console.log(state.filteredProducts)
        
      }

      // When both name and price are filtered CORRECT
      else if (state.searchname !== 'All' && state.searchCat === 'All' && state.searchPrice > 0) {
        console.log('name and price filter')
        state.filteredProducts = state.products.filter(product =>
          product.title.toLowerCase().includes(state.searchname.toLowerCase()) &&
          product.price <= state.searchPrice
        );
        console.log(state.filteredProducts)
        
      }

      // When both category and price are filtered CORRECT
     else if (state.searchname === 'All' && state.searchCat !== 'All' && state.searchPrice > 0) {
        console.log('category and price filter')
        state.filteredProducts = state.products.filter(product =>
          product.category === state.searchCat &&
          product.price <= state.searchPrice
        );
        console.log(state.filteredProducts)
        
      }

      // When name, category, and price are all filtered
      else if (state.searchname !== 'All' && state.searchCat !== 'All' && state.searchPrice > 0) {
        console.log('name, category and price filter')
        state.filteredProducts = state.products.filter(product =>
          product.title.toLowerCase().includes(state.searchname.toLowerCase()) &&
          product.category === state.searchCat &&
          product.price <= state.searchPrice
        );
        console.log(state.filteredProducts)
        
      }
      else{
        state.filteredProducts = state.products
      }
      
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
