import "./HomePage.css";
import Header from "./Header";
import WallPaper from "./WallPaper";
import Card from "../Meals/Card";
import React, { useEffect, useState } from "react";
import Buffer from "./Buffer";
import { useSelector } from "react-redux";

const HomePage = () => {
  const mealsSelector = useSelector((state) => state.meals);
  const [emptyMenu, setEmptyMenu] = useState(<></>);
  const mealList = mealsSelector.meals.filter((meal) =>
    meal.mealName
      .toLowerCase()
      .split(" ")
      .join("")
      .includes(mealsSelector.searchMeal.toLowerCase())
  );

  useEffect(() => {
    setEmptyMenu(<div className="empty-menu">Opps, No Food found!</div>);
  }, []);

  let menuMeals = mealList.map((item, index) => {
    return index === mealList.length - 1 ? (
      <Card key={item._id} item={item} index={true} />
    ) : (
      <Card key={item._id} item={item} index={false} />
    );
  });

  return (
    <div className="HomePage">
      <Header />
      <WallPaper />
      <div className="bottom">
        <div className="menu-container">
          {mealsSelector.isLoading ? (
            <Buffer />
          ) : menuMeals.length ? (
            menuMeals
          ) : (
            emptyMenu
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
