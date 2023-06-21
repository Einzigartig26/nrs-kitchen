import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Cart/cart-context";
import classes from "./QuantityInput.module.css";

const QuantityInput = (props) => {
  const cartContext = useContext(CartContext);
  const [itemsToSend, setItemsToSend] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState(1);

  const addToCart = (event) => {
    event.preventDefault();
    cartContext.increaseCountFromAddButton(quantity);
    setInputValue(1);
    axios
      .post("http://localhost:8081/nrs_kitchen/add_to_cart", itemsToSend)
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setQuantity(1);
  };

  const getQuantity = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);

    setQuantity(parseInt(event.target.value));
  };

  useEffect(() => {
    setItemsToSend({ meal_id: props.meal_id, meal_quantity: quantity });
  }, [quantity]);

  const clearValue = (event) => {
    event.preventDefault();
    setInputValue(1);
  };

  return (
    <form className={classes["btn-container"]} onSubmit={clearValue}>
      <input
        className={classes.input}
        onChange={getQuantity}
        value={inputValue}
        onFocus={() => {
          setInputValue("");
        }}
        onBlur={() => {
          setInputValue(1);
        }}
      />
      <button className={classes.btn} onClick={addToCart} type="submit">
        + Add
      </button>
    </form>
  );
};

export default QuantityInput;
