import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./meal";

const store = configureStore({
  reducer: {
    meals: mealReducer,
  },
});

export default store;
