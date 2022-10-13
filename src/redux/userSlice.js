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
  },
});

export const {login, register, logout} = userSlice.actions;
export default userSlice.reducer;