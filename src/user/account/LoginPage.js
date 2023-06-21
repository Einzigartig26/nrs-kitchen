import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleLoginButton = (event) => {
    event.preventDefault();
    if (userName && password) {
      axios
        .post("http://localhost:8080/nrs_kitchen/user/login", {
          userName: userName,
          userPassword: password,
        })
        .then((result) => {
          let message = result.data.message;

          switch (message) {
            case "invalid username or password":
              window.alert("invalid username or password");
              break;

            case "user does not exist":
              window.alert("user does not exist");
              break;

            default:
              break;
          }

          if (result.data.isAuthenticated) {
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.alert("please enter the email/password");
    }
  };

  return (
    <div className={classes["login-page-container"]}>
      <form className={classes["form-container"]} onSubmit={handleLoginButton}>
        <div className="user-name-container">
          <div className="user-name">Username/Email :</div>
          <input
            type="text"
            placeholder="Enter Username or email"
            className={classes["username-input"]}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>
        <div className="password-container">
          <div className="Password">Password :</div>
          <input
            type="password"
            placeholder="Enter Password"
            className={classes["password-input"]}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className={classes["login-button"]}
          onClick={handleLoginButton}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
