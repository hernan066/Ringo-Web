import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    subTotal: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];

      const sub = state.products.reduce((acc, cur) => {
        return acc + cur.combo_price;
      }, 0);

      state.subTotal = sub;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.subTotal = state.products.reduce((acc, cur) => {
        return acc + cur.combo_price;
      }, 0);
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
      
      state.subTotal = state.products.reduce((acc, cur) => {
        return acc + cur.combo_price;
      }, 0);
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = uiSlice.actions;
export default uiSlice.reducer;
