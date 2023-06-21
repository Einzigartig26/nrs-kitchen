import React, { useState } from "react";
import { useNavigate } from "react-router";
import classes from "./Cart.module.css";
import CartMeals from "./CartMeals";
import Buffer from "../UI/Buffer";
import EmptyCart from "./EmptyCart";

import { useSelector } from "react-redux";

const Cart = () => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const changeGrandTotal = (price) => {
    setGrandTotal((state) => state - price);
  };

  const cartMealList = cart.cartMeals.map((item) => {
    return (
      <CartMeals
        key={item._id}
        mealId={item._id}
        mealQuantity={item.mealQuantity}
        mealName={item.mealName}
        mealPrice={item.mealPrice}
        changeGrandTotal={changeGrandTotal}
      />
    );
  });

  const checkoutConfirmation = (
    <div className={classes["popup-background"]}>
      <div className={classes["checkout-popup-container"]}>
        <h1 className={classes["question-container"]}> Are you sure?</h1>
        <div className={classes["checkout-button-container"]}>
          <button
            className={classes["no-button"]}
            onClick={() => {
              setConfirmOrder(false);
            }}
          >
            No
          </button>
          <button
            className={classes["checkout-button"]}
            onClick={() => {
              navigate("/confirm-order", { replaceUrl: true });
            }}
          >
            Yes, Checkout
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes["cart-container"]}>
      {confirmOrder ? checkoutConfirmation : <></>}
      <div className={classes["cart-header"]}>NR's Kitchen</div>
      <div className={classes["cart-middle-container"]}>
        {cart.cartMeals.loading ? (
          <div className={classes["cart-buffer-container"]}>
            <Buffer />
          </div>
        ) : cart.cartMeals.length ? (
          cartMealList
        ) : (
          <EmptyCart />
        )}

        <div className={classes["cart-bottom-container"]}>
          <div className={classes["total-price-container"]}>
            <div className={classes["grand-total-container"]}>
              Grand Total : {grandTotal + (grandTotal * 18) / 100} ₹
            </div>
            <div className={classes["gst-container"]}>
              GST(18%): {(grandTotal * 18) / 100} ₹
            </div>
          </div>

          <div className={classes["cart-button-container"]}>
            <button
              className={classes["back-to-menu-button"]}
              onClick={() => {
                navigate("/");
              }}
            >
              Back to menu
            </button>
            {cart.cartMealCount ? (
              <button
                className={
                  cart.cartMealCount
                    ? classes["order-button"]
                    : classes["disabled-order-button"]
                }
                onClick={
                  cart.cartMealCount
                    ? () => {
                        setConfirmOrder(true);
                      }
                    : () => {}
                }
              >
                Order
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
