import { configureStore } from "@reduxjs/toolkit";
import news from "../features/newsSlice/newsSlice";
const store = configureStore({
  devTools: true,
  reducer: {
    news,
  },
});

export default store;
