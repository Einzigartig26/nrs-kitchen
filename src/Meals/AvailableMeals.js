import React from "react";
import Card from "./Card";
import classes from "./AvailableMeals.module.css";
import { useSelector } from "react-redux";

const AvailableMeals = () => {
  const meals = useSelector((state) => state.meals.meals);

  const mealsList = meals.map((item) => (
    <Card
      key={item.meal_id}
      meal_id={item.meal_id}
      meal_name={item.meal_name}
      meal_price={item.meal_price}
      meal_description={item.meal_description}
    />
  ));

  return <div className={classes["menu-container"]}>{mealsList}</div>;
};

export default AvailableMeals;
