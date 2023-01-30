import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    listProducts: [],
    
  },
  reducers: {
    getProducts: (state, action) => {
      state.listProducts = action.payload;
    },
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
