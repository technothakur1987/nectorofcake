import { createSlice } from '@reduxjs/toolkit';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig'; // Update the path if necessary

const initialState = {
    loader: true,
    testimonials:[],
}

const cakeSlice = createSlice({
    name: 'cakeSlice',
    initialState,
    reducers: {
      setTestinomials: (state, action) => {
        state.testimonials = action.payload;
        state.loader = false;
      },
      
    }
  });

  export const { setTestinomials } = cakeSlice.actions;
  export default cakeSlice.reducer;

/*function to fetch testinomials */
  export const fetchTestinomials = () => async dispatch => {
   
    try {
      const q = query(collection(fireDB, "testimonials"), orderBy('id'));
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
