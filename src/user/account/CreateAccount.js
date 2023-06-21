import axios from "axios";
import React, { useState } from "react";
import classes from "./CreateAccount.module.css";

const CreatAccount = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailId, setEmailId] = useState();
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();

  const handleClick = () => {
    if (firstName && lastName && emailId && userName && userPassword) {
      axios
        .post("http://localhost:8080/nrs_kitchen/user/add_user", {
          firstName: firstName,
          lastName: lastName,
          emailId: emailId,
          userName: userName,
          userPassword: userPassword,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          window.alert("not reachable");
        });
    } else {
      window.alert("fill everything");
    }
  };

  return (
    <div className={classes["create-account-page"]}>
      <div className={classes["create-account-form-container"]}>
        <div className={classes["firstname-container"]}>
          <div className={classes["user-name"]}>First Name :</div>
          <input
            type="text"
            placeholder="First Name"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>

        <div className={classes["lastname-container"]}>
          <div className={classes["last-name"]}>Last Name :</div>
          <input
            type="text"
            placeholder="Last Name"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
        <div className={classes["email-container"]}>
          <div className={classes["e-mail"]}>Email :</div>
          <input
            type="text"
            placeholder="E-mail"
            onChange={(event) => {
              setEmailId(event.target.value);
            }}
          />
        </div>

        <div className={classes["username-container"]}>
          <div className={classes["user-name"]}>User Name :</div>
          <input
            type="text"
            placeholder="User Name"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>
        <div className={classes["password-container"]}>
          <div className={classes["password"]}>Password :</div>
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
          />
          {/* <div className={classes["confirm-password"]}>Confirm-Password :</div>
          <input
            type="password"
            onChange={(event) => {
              if (password === event.target.value) {
                setPassword(event.target.value);
              }
            }}
          /> */}
        </div>
        <button
          className={classes["create-account-button"]}
          onClick={handleClick}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatAccount;
