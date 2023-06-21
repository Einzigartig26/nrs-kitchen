import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmIcon from "./ConfirmIcon";
import classes from "./OrderSuccessful.module.css";
import RatingContainer from "./RatingContainer";

const OrderSuccessful = () => {
  const navigate = useNavigate();
  const [showRating, setShowRating] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);

  const deleteCart = () => {
    axios
      .delete("http://localhost:8081/nrs_kitchen/delete_all_from_cart")
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/nrs_kitchen/count_grand_total")
      .then((res) => {
        setGrandTotal(res.data.Grand_total);

        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const close = () => {
    setShowRating(false);
  };

  return (
    <div className={classes["order-successful"]}>
      {showRating ? <RatingContainer close={close} /> : <></>}
      <div className={classes["thanks-title"]}>
        Your order has been received!
      </div>
      <div className={classes.thanks}>Thank you for your purchase!</div>
      <div className={classes["confirm-icon"]}>
        {!showRating ? <ConfirmIcon /> : <></>}
      </div>
      <div className={classes["confirm-title"]}>Order Confirmed!</div>
      <div className={classes.payment}>You Paid : ₹{grandTotal}</div>
      <button
        className={classes["give-rating"]}
        onClick={() => {
          setShowRating(true);
        }}
      >
        Give Ratings
      </button>
      <button
        className={classes["back"]}
        onClick={() => {
          deleteCart();
          navigate("/");
        }}
      >
        Back to menu
      </button>
    </div>
  );
};

export default OrderSuccessful;
