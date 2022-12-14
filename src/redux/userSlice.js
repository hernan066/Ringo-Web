import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    whatsappUser: null,
  },
  reducers: {
    
    login:(state, action) => {
      state.currentUser = action.payload;
    },
    register:(state, action) => {
      state.currentUser = action.payload;
    },
    logout:(state) => {
      state.currentUser = null;
    },
    getWhatsappUser:(state, action) => {
      state.whatsappUser = action.payload;
    },
    getWhatsappUserAddress:(state, action) => {
      state.whatsappUser = {...state.whatsappUser, ...action.payload};
    }

  },
});

export const {login, register, logout, getWhatsappUser, getWhatsappUserAddress} = userSlice.actions;
export default userSlice.reducer;