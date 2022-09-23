import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addProduct } = uiSlice.actions;
export default uiSlice.reducer;
