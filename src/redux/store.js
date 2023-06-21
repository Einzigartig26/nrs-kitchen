import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./meal";

const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
});

export default store;
