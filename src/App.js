import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import HomePage from "./UI/HomePage";

import OrderSuccessful from "./Order/OrderSuccessful";
import LoginPage from "./user/account/LoginPage";
import CreatAccount from "./user/account/CreateAccount";
import ProfilePage from "./user/profile/ProfilePage";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { fetchAllMeals } from "./redux";

const App = () => {
  let isInitial = true;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(fetchAllMeals());
      isInitial = false;
    }
  }, []);

  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="create-account" element={<CreatAccount />} />
        <Route path="cart" element={<Cart />} />
        <Route path="confirm-order" element={<OrderSuccessful />} />
      </Routes>
    </Provider>
  );
};

export default App;
