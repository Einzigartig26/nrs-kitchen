import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  meals: [],
};

const mealSlice = createSlice({
  name: "meals",
  initialState: initialState,
  reducers: {
    getMeals: (state, action) => {
      state.meals = action.payload;
    },
  },
});

export const fetchAllMeals = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080:/nrs_kitchen/meal/find_all_meals")
      .then((result) => {
        console.log(result.data);
        dispatch(mealActions.getMeals(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const mealActions = mealSlice.actions;
const mealReducer = mealSlice.reducer;
export default mealReducer;
