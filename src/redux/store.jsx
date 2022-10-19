import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./notes/noteSlice";
export const store = configureStore({
  reducer: noteReducer,
});
