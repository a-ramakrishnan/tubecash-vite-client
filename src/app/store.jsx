import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice.jsx";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/auth/authSlice.jsx";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  //Set devTools to true during development
  devTools: false,
});

setupListeners(store.dispatch);
