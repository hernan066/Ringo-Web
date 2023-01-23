import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    subTotal: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productFilter = state.products.find(
        (product) => product.product._id === action.payload.product._id
      );
      if (productFilter) {
        state.products = state.products.map((item) => {
          if (item.product._id === action.payload.product._id) {
            return {
              ...item,
              totalPrice: action.payload.totalPrice + item.totalPrice,
              totalQuantity: action.payload.totalQuantity + item.totalQuantity,
            };
          } else {
            return item;
          }
        });
      } else {
        state.products = [...state.products, action.payload];
      }

      const sub = state.products.reduce((acc, cur) => {
        return acc + cur.totalPrice;
      }, 0);

      state.subTotal = sub;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.product._id !== action.payload
      );
      state.subTotal = state.products.reduce((acc, cur) => {
        return acc + cur.totalPrice;
      }, 0);
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.product._id === action.payload.product._id) {
          return {
            ...product,
            totalPrice: action.payload.totalPrice + product.totalPrice,
            totalQuantity: action.payload.totalQuantity + product.totalQuantity,
          };
        } else {
          return product;
        }
      });

      const sub = state.products.reduce((acc, cur) => {
        return acc + cur.totalPrice;
      }, 0);

      state.subTotal = sub;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = uiSlice.actions;
export default uiSlice.reducer;
