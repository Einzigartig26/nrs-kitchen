import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import classes from "./RatingContainer.module.css";
import Ratings from "./Ratings";

const RatingContainer = () => {
  const [mealsList, setMealsList] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/nrs_kitchen/find_all_cart_meals")
      .then((res) => {
        setMealsList(res.data);
        setCount(res.data.length);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeItems = () => {
    setCount(count - 1);
    console.log(count);
  };

  const ratings = mealsList.map((meal) => (
    <Ratings
      key={meal.meal_id}
      meal_id={meal.meal_id}
      removeItems={removeItems}
    />
  ));

  const deleteAllFromCart = () => {
    axios
      .delete("http://localhost:8081/nrs_kitchen/delete_all_from_cart")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (count !== 0) {
    return (
      <div className={classes["rating-container"]}>
        <form>
          <div className={classes.rating}>{ratings}</div>
        </form>
      </div>
    );
  } else {
    return (
      <div className={classes["rating-container"]}>
        <form>
          <div className={classes.rating}>
            <button
              className={classes["back-to-home"]}
              onClick={() => {
                deleteAllFromCart();
                navigate("/");
              }}
            >
              Back to Menu
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default RatingContainer;
