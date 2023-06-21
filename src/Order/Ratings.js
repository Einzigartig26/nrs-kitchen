import React, { useEffect, useState } from "react";
import classes from "./Ratings.module.css";
import { Rating } from "@mui/material";
import axios from "axios";

const Ratings = (props) => {
  const [value, setValue] = useState(0);
  const [mealName, setMealName] = useState("");
  const [comment, setComment] = useState("");
  const [removeItem, setRemoveItem] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:8081/nrs_kitchen/find_meal_name_price", {
        meal_id: props.meal_id,
      })
      .then((res) => {
        setMealName(res.data.meal_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addRating = () => {
    axios
      .post("http://localhost:8081/nrs_kitchen/add_ratings/" + props.meal_id, {
        meal_id: props.meal_id,
        meal_comments: comment,
        meal_rating: value,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (removeItem) {
    return (
      <li className={classes.card}>
        <div className={classes["top-container"]}>
          <div className={classes["meal-name"]}>{mealName} </div>
          <div className={classes.stars}>
            <Rating
              value={value}
              onChange={(event) => {
                setValue(parseInt(event.target.value));
              }}
              size="large"
            />
          </div>
        </div>
        <textarea
          placeholder="Comment..."
          className={classes["comment-input"]}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button
          className={classes["submit-btn"]}
          onClick={() => {
            setRemoveItem(false);
            props.removeItems();
            addRating();
          }}
        >
          Submit
        </button>
      </li>
    );
  } else {
    return <></>;
  }
};

export default Ratings;
