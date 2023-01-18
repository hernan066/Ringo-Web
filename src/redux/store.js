import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    authPage: authReducer,
    cart: cartReducer,
    ui: uiReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userApi.middleware),
});
