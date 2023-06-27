import React from "react";
import { useNavigate } from "react-router";

import CartIcon from "../Icons/CartIcon";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, mealActions } from "../redux";

const Header = () => {
  const navigate = useNavigate();
  const cartMealCount = useSelector((state) => state.cart.cartMealCount);
  const dispatch = useDispatch();

  const goToCart = () => {
    dispatch(cartActions.updteState());
    navigate("cart");
  };

  return (
    <div className={classes.header}>
      <div className={classes.heading}>NR's Kitchen</div>
      <div className={classes["button-container"]}>
        <input
          type="text"
          className={classes["search-bar"]}
          onFocus={(e) => (e.target.placeholder = "Search...")}
          onBlur={(e) => (e.target.placeholder = "")}
          onChange={(e) => {
            dispatch(mealActions.setSearchMeal(e.target.value));
          }}
        />

        {/* {cartContext.isAuthenticated ? (
          <a href="/profile" className={classes["account-link"]}>
            Profile
          </a>
        ) : (
          <a href="/login" className={classes["account-link"]}>
            Login
          </a>
        )} */}
        <button className={classes.btn} onClick={goToCart}>
          <div className={classes.icon}>
            <CartIcon />
          </div>
          <div className={classes["your-cart"]}>Your Cart</div>
          <div className={classes["item-count"]}>{cartMealCount}</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
