import React from "react";
import classes from "./DeleteButton.module.css";
import DeleteIcon from "./DeleteIcon";

const DeleteButton = (props) => {
  return (
    <button className={classes.btn} onClick={props.deleteCartMeal}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteButton;
