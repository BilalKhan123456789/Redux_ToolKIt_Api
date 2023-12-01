import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Features/GetApi/GetApi";

export const Store = configureStore({
  reducer: todoReducer,
});
