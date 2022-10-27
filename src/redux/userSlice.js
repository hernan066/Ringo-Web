import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
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
    getPhoneNumber:(state, action) => {
      state.currentUser = action.payload;
    }

  },
});

export const {login, register, logout, getPhoneNumber} = userSlice.actions;
export default userSlice.reducer;