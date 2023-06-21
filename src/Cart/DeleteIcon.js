import React from "react";
import deleteIcon from "../Img/trash-solid.svg";
import classes from "./DeleteIcon.module.css";

const DeleteIcon = () => {
  return (
    <img
      src={deleteIcon}
      width="100%"
      height="100%"
      className={classes.image}
    />
  );
};

export default DeleteIcon;
