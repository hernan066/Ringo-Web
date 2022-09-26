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
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            weight: action.payload.weight,
            combo_price:
              product.extra_price *
              (action.payload.weight / product.unit_weight),
          };
        } else {
          return product;
        }
      });
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = uiSlice.actions;
export default uiSlice.reducer;
