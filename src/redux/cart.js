import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartMeals: [],
  isLoading: false,
  cartMealCount: 0,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState: initialState,
  reducers: {
    fethingCartMeals: (state) => {
      state.isLoading = true;
    },
    cartMealsFetchedSuccessFully: (state) => {
      state.isLoading = false;
    },
    getCartMeals: (state, action) => {
      state.cartMeals = action.payload.cartMeals;
      state.grandTotal = action.payload.grandTotal;
      state.cartMealCount = action.payload.cartMealCount;
    },
  },
});

export const fetchCartMeals = () => {
  return (dispatch) => {
    dispatch(cartActions.fethingCartMeals());
    dispatch(cartActions.fethingCartMeals());
    axios
      .get("http://localhost:8080/nrs_kitchen/cart/find_all_cart_meals")
      .then((result) => {
        dispatch(cartActions.getCartMeals(result.data));
        dispatch(cartActions.cartMealsFetchedSuccessFully());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
