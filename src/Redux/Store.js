import { configureStore } from "@reduxjs/toolkit";
import myCounter from "./CounterSlice";


const store = configureStore({
  reducer: {
    counter: myCounter,
  },
});

export default store;
