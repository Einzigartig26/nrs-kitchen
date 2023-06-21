import React from "react";
import classes from "./EmptyCart.module.css";
import emptyCart from "../Img/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className={classes["empty-cart-container"]}>
      <div className={classes["image-container"]}>
        <img
          src={emptyCart}
          alt="empty-cart"
          className={classes["empty-cart-image"]}
        />
      </div>
    </div>
  );
};

export default EmptyCart;
