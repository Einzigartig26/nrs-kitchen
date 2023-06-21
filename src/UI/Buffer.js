import React from "react";
import classes from "./Buffer.module.css";

const Buffer = () => {
  return (
    <div className={classes["buffer-main-container"]}>
      <div className={classes["buffer-outer-container"]}>
        <div className={classes["inner-division-1"]}></div>
        <div className={classes["inner-division-2"]}></div>
        <div className={classes["inner-division-3"]}></div>
        <div className={classes["inner-division-4"]}></div>
      </div>
    </div>
  );
};

export default Buffer;
