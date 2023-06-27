import React, { useState } from "react";
import classes from "./Card.module.css";
import Star from "./Star";
import { useDispatch } from "react-redux";

import axios from "axios";
import { cartActions } from "../redux/cart";

const Card = ({ item, index }) => {
  const [disable, setDisable] = useState(false);
  const [inputMealValue, setInputMealValue] = useState(
    item.mealQuantity ? item.mealQuantity : 0
  );

  const dispatch = useDispatch();

  const addToCart = () => {
    setDisable(true);

    axios
      .post("http://localhost:8080/nrs_kitchen/cart/add_to_cart", {
        mealId: item._id,
      })
      .then((result) => {
        setInputMealValue(inputMealValue + 1);
        dispatch(
          cartActions.changeCartMealCount({
            change: 1,
            meal: {
              mealName: item.mealName,
              mealPrice: item.mealPrice,
              _id: item._id,
              mealQuantity: inputMealValue,
            },
          })
        );
        setDisable(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decreaseQuantity = () => {
    setDisable(true);

    axios
      .put("http://localhost:8080/nrs_kitchen/cart/decrease_quantity", {
        mealId: item._id,
      })
      .then((result) => {
        setInputMealValue(inputMealValue - 1);
        dispatch(
          cartActions.changeCartMealCount({ change: -1, mealId: item._id })
        );
        setDisable(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        {inputMealValue ? (
          <div className={classes["input-container"]}>
            <button
              className={classes["decrease-quantity"]}
              onClick={decreaseQuantity}
              disabled={disable}
            >
              -
            </button>
            <input
              className={classes.quantityInput}
              value={inputMealValue}
              disabled
            />
            <button
              className={classes["increase-quantity"]}
              onClick={addToCart}
              disabled={disable}
            >
              +
            </button>
          </div>
        ) : (
          <>
            <button
              className={classes["add-button"]}
              onClick={addToCart}
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
