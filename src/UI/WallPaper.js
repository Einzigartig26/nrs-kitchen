import React from "react";
import classes from "./WallPaper.module.css";
import MainImage from "../Img/pizza2.jpeg";

const WallPaper = () => {
  return (
    <div className={classes["image-container"]}>
      <img className={classes.image} src={MainImage} alt="Food-App" />
    </div>
  );
};

export default WallPaper;
