import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "./cart-context";
import classes from "./ChangeQuantity.module.css";

const ChangeQuantity = (props) => {
  const [mealQuantity, setMealQuantity] = useState(props.meal_quantity);
  const cartContext = useContext(CartContext);

  const increaseQuantity = () => {
    const data = { meal_id: props.meal_id };
    axios
      .put("http://localhost:8081/nrs_kitchen/increase_quantity", data)
      .then((res) => {
        setMealQuantity(res.data.new_quantity);
        props.getQuantity(res.data.new_quantity);
        console.log(res.data.new_quantity);
      })
      .catch((error) => {
        console.log(error);
      });
    cartContext.increaseHeaderCount();
    props.changeGrandTotal(props.meal_price + (props.meal_price * 18) / 100);
  };

  const decreaseQuantity = () => {
    const data = { meal_id: props.meal_id };
    axios
      .put("http://localhost:8081/nrs_kitchen/decrease_quantity", data)
      .then((res) => {
        setMealQuantity(res.data.new_quantity);
        props.getQuantity(res.data.new_quantity);
        console.log(res.data.new_quantity);
      })
      .catch((error) => {
        console.log(error);
      });
    cartContext.decreaseHeaderCount();
    props.changeGrandTotal(-(props.meal_price + (props.meal_price * 18) / 100));
  };

  const changeValueFromInput = (event) => {
    event.preventDefault();
    setMealQuantity(event.target.value);
  };

  useEffect(() => {
    props.getQuantity(mealQuantity);
  }, []);

  return (
    <div className={classes["form-container"]}>
      <button className={classes.decrease} onClick={decreaseQuantity}>
        -
      </button>
      <input
        className={classes["quantity-input"]}
        value={mealQuantity}
        onChange={changeValueFromInput}
        onFocus={() => {
          setMealQuantity("");
        }}
        disabled
      />
      <button className={classes.increase} onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default ChangeQuantity;
