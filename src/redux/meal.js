import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  meals: [],
  isLoading: false,
};

const mealsSlice = createSlice({
  name: "meals",
  initialState: initialState,
  reducers: {
    getMeals: (state, action) => {
      state.meals = action.payload;
    },
    fetchingMeals: (state) => {
      state.isLoading = true;
    },
    mealsFetchedSuccessfully: (state) => {
      state.isLoading = false;
    },
  },
});

export const fetchAllMeals = () => {
  return (dispatch) => {
    dispatch(mealActions.fetchingMeals());
    axios
      .get("http://localhost:8080/nrs_kitchen/meal/find_all_meals")
      .then((result) => {
        dispatch(mealActions.getMeals(result.data));
        dispatch(mealActions.mealsFetchedSuccessfully());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const mealActions = mealsSlice.actions;

export default mealsSlice.reducer;
