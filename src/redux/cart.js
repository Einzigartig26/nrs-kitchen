import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartMeals: [],
  isLoading: false,
  cartMealCount: 0,
  grandTotal: 0,
  stateUpdate: true,
};

const cartSlice = createSlice({
  name: "cart",

  initialState: initialState,
  reducers: {
    setIsLoadingTrue: (state, action) => {
      state.isLoading = true;
    },
    setIsLoadingFalse: (state) => {
      state.isLoading = false;
    },
    getCartMeals: (state, action) => {
      state.cartMeals = action.payload.cartMeals;
      state.grandTotal = action.payload.grandTotal;
      state.cartMealCount = action.payload.cartMealCount;
    },
    changeCartMealCount: (state, action) => {
      let index = state.cartMeals.findIndex(
        (item) => item._id === action.payload.meal._id
      );

      if (action.payload.delete) {
        state.cartMeals.splice(index, 1);
        state.cartMealCount =
          state.cartMealCount - action.payload.meal.mealQuantity;

        return;
      } else if (index < 0 && action.payload.change > 0) {
        // add meal to the array
        state.cartMeals.push(action.payload.meal);
      } else if (
        state.cartMeals[index].mealQuantity === 1 &&
        action.payload.change < 0
      ) {
        // delete the meal from array
        state.cartMeals.splice(index, 1);
      } else if (state.cartMeals[index].mealQuantity > 0) {
        // increaseing or decreasing meal quantity of the meal
        state.cartMeals[index] = {
          ...state.cartMeals[index],
          mealQuantity:
            state.cartMeals[index].mealQuantity + action.payload.change,
        };

        state.grandTotal =
          state.grandTotal +
          state.cartMeals[index].mealPrice * action.payload.change;
      }
      state.cartMealCount = state.cartMealCount + action.payload.change;
    },
    updteState: (state) => {
      state.stateUpdate = !state.stateUpdate;
    },
  },
});

export const fetchCartMeals = () => {
  return (dispatch) => {
    dispatch(cartActions.setIsLoadingTrue());
    axios
      .get("http://localhost:8080/nrs_kitchen/cart/find_all_cart_meals")
      .then((result) => {
        dispatch(cartActions.getCartMeals(result.data));
        dispatch(cartActions.setIsLoadingFalse());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
