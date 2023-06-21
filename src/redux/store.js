import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./meal";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    cart: cartReducer,
  },
});

export default store;
