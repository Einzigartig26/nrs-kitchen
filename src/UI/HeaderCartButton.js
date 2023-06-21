import React from "react";

import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <div className={classes["button-container"]}>
      <button
        className={classes.btn}
        // onClick={cartContext.showingCart}
      >
        <div className={classes.icon}>
          <CartIcon />
        </div>
        <div className={classes["your-cart"]}>Your Cart</div>
        <div className={classes["item-count"]}>
          {
            // cartContext.headerCount
            0
          }
        </div>
      </button>
    </div>
  );
};

export default HeaderCartButton;
