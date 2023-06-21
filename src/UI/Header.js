import React from "react";
import { useNavigate } from "react-router";

import CartIcon from "../Icons/CartIcon";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cartMealCount = useSelector((state) => state.cart.cartMealCount);

  const goToCart = () => {
    navigate("cart");
  };

  return (
    <div className={classes.header}>
      <div className={classes.heading}>NR's Kitchen</div>

      <div className={classes["button-container"]}>
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
