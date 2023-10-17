import { configureStore } from "@reduxjs/toolkit";
import translateSlice from "./slices/translateSlice";

export default configureStore({
  reducer: {
    translateSlice,
  },
});
