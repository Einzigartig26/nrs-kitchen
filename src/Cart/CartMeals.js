import React, { useState } from "react";
import deleteIcon from "../Img/trash-solid.svg";
import classes from "./CartMeals.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux";

const CartMeals = (props) => {
  const [disable, setDisable] = useState(false);
  const [inputMealValue, setInputMealValue] = useState(props.mealQuantity);
  const dispatch = useDispatch();

  const increaseQuantity = (event) => {
    setDisable(true);
    axios
      .post("http://localhost:8080/nrs_kitchen/cart/add_to_cart", {
        mealId: props.mealId,
      })
      .then((result) => {
        setInputMealValue(inputMealValue + 1);
        dispatch(
          cartActions.changeCartMealCount({
            change: 1,
            meal: {
              mealName: props.mealName,
              mealPrice: props.mealPrice,
              _id: props.mealId,
              mealQuantity: props.mealQuantity,
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
        mealId: props.mealId,
      })
      .then((result) => {
        setInputMealValue(inputMealValue - 1);
        dispatch(
          cartActions.changeCartMealCount({
            change: -1,
            meal: {
              mealName: props.mealName,
              mealPrice: props.mealPrice,
              _id: props.mealId,
              mealQuantity: props.mealQuantity,
            },
          })
        );
        setDisable(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMealFromCart = () => {
    axios
      .delete(
        "http://localhost:8080/nrs_kitchen/cart/delete_meal_from_cart" +
          `${props.mealId}`
      )
      .then((result) => {
        dispatch(
          cartActions.changeCartMealCount({
            change: -1,
            meal: {
              mealName: props.mealName,
              mealPrice: props.mealPrice,
              _id: props.mealId,
              mealQuantity: props.mealQuantity,
            },
            delete: true,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (props.mealQuantity) {
    return (
      <li key={props.mealId} className={classes.meal}>
        <div className={classes["detail-container"]}>
          <section className={classes.container}>
            <div className={classes["meal-name"]}>{props.mealName}</div>
            <div className={classes["meal-price"]}>
              Price : ₹{props.mealPrice}
            </div>
          </section>
          <div className={classes.quantity}>x {props.mealQuantity}</div>

          <div className={classes.totalPrice}>
            Total : ₹ {props.mealPrice * props.mealQuantity}
          </div>
        </div>
        <div className={classes["btn-container"]}>
          <div className={classes["form-container"]}>
            <button
              className={classes.decrease}
              onClick={() => {
                decreaseQuantity();
              }}
              disabled={disable}
            >
              -
            </button>
            <input
              className={classes["quantity-input"]}
              value={props.mealQuantity}
              disabled
            />
            <button
              className={classes.increase}
              onClick={increaseQuantity}
              disabled={disable}
            >
              +
            </button>
          </div>
          <button className={classes.deleteButton} onClick={deleteMealFromCart}>
            <img
              src={deleteIcon}
              width="100%"
              height="100%"
              className={classes.image}
              alt="delete icon"
            />
          </button>
        </div>
      </li>
    );
  }
};

export default CartMeals;
