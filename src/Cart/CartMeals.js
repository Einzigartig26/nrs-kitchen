import React, { useState } from "react";
import deleteIcon from "../Img/trash-solid.svg";
import classes from "./CartMeals.module.css";

import { useDispatch } from "react-redux";

const CartMeals = (props) => {
  const [disable, setDisable] = useState(false);
  const [mealQuantity, setMealQuantity] = useState(props.mealQuantity);
  const dispatch = useDispatch();

  // deleteing the meal from the cart and decreasing it in the cart context

  // decreasing the count of the meal by one in cart and cart context

  // increasing the count of the meal by one in cart and cart context
  // const increaseQuantity = () => {
  //   setDisable(true);

  //   axios
  //     .post("http://localhost:8080/nrs_kitchen/cart/add_to_cart", {
  //       mealId: props.mealId,
  //     })
  //     .then((result) => {
  //       setMealQuantity((state) => state + 1);
  //       setDisable(false);
  //       props.changeGrandTotal(-props.mealPrice);
  //       cartContext.setHeaderCount(cartContext.headerCount + 1);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  if (mealQuantity) {
    return (
      <li key={props.mealId} className={classes.meal}>
        <div className={classes["detail-container"]}>
          <section className={classes.container}>
            <div className={classes["meal-name"]}>{props.mealName}</div>
            <div className={classes["meal-price"]}>
              Price : ₹{props.mealPrice}
            </div>
          </section>
          <div className={classes.quantity}>x {mealQuantity}</div>

          <div className={classes.totalPrice}>
            Total : ₹ {props.mealPrice * mealQuantity}
          </div>
        </div>
        <div className={classes["btn-container"]}>
          <div className={classes["form-container"]}>
            <button
              className={classes.decrease}
              // onClick={decreaseQuantity}
              disabled={disable}
            >
              -
            </button>
            <input
              className={classes["quantity-input"]}
              value={mealQuantity}
              disabled
            />
            <button
              className={classes.increase}
              // onClick={increaseQuantity}
              disabled={disable}
            >
              +
            </button>
          </div>
          <button
            className={classes.deleteButton}
            onClick={() => {
              // deleteCartMeal(props.mealId);
            }}
          >
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
