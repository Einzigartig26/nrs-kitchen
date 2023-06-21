import React, { useState } from "react";
import classes from "./Card.module.css";
import Star from "./Star";
import { useSelector } from "react-redux";

const Card = ({ item, index }) => {
  const [disable, setDisable] = useState(false);
  const [inputMealValue, setInputMealValue] = useState(
    item.mealQuantity ? item.mealQuantity : 0
  );
  // this is th comment
  let meals = useSelector((state) => state.meals.meals);
  // console.log(meals);
  // let sorted = meals.slice().sort((a, b) => (a.mealName > b.mealName ? 1 : -1));
  // console.log(sorted);

  // const addMeal = () => {
  //   setDisable(true);
  //   axios
  //     .post("http://localhost:8080/nrs_kitchen/cart/add_to_cart", {
  //       mealId: item._id,
  //     })
  //     .then((result) => {
  //       cartContext.setHeaderCount(cartContext.headerCount + 1);
  //       setInputMealValue(inputMealValue + 1);
  //       setDisable(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const decreaseQuantity = () => {
  //   dispatch(decreaseCartQuantity(item._id));
  // };

  const found = meals.find((meal) => meal._id === item._id);

  return (
    <li
      className={classes["meal-container"]}
      style={index ? {} : { borderBottom: "1px solid black" }}
    >
      <div>
        <div className={classes["star-name-container"]}>
          <p className={classes["meal-name"]}>{item.mealName}</p>
          <Star mealId={item._id} />
        </div>
        <p className={classes["meal-description"]}>{item.mealDescription}</p>
        <p className={classes["meal-price"]}>₹{item.mealPrice}</p>
      </div>

      <div className={classes["btn-container"]}>
        {found.mealQuantity ? (
          <div className={classes["input-container"]}>
            <button
              className={classes["decrease-quantity"]}
              // onClick={decreaseQuantity}
              disabled={disable}
            >
              -
            </button>
            <input
              className={classes.quantityInput}
              value={found.mealQuantity}
              disabled
            />
            <button
              className={classes["increase-quantity"]}
              // onClick={addMeal}
              disabled={disable}
            >
              +
            </button>
          </div>
        ) : (
          <>
            <button
              className={classes["add-button"]}
              // onClick={addMeal}
              disabled={disable}
            >
              + Add
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default Card;
