import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    hambugerMenu: false,
    cartMenu: false,
  },
  reducers: {
    openHambugerMenu: (state) => {
      state.hambugerMenu = true;
    },
    closeHambugerMenu: (state) => {
      state.hambugerMenu = false;
    },
    openCartMenu: (state) => {
      state.cartMenu = true;
    },
    closeCartMenu: (state) => {
      state.cartMenu = false;
    },
  },
});

export const {
  openHambugerMenu,
  closeHambugerMenu,
  openCartMenu,
  closeCartMenu,
} = uiSlice.actions;
export default uiSlice.reducer;
