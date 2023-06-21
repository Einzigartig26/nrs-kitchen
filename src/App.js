import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import HomePage from "./UI/HomePage";
import OrderSuccessful from "./Order/OrderSuccessful";
import { useDispatch } from "react-redux";
import { fetchAllMeals } from "./redux";
import axios from "axios";

const App = () => {
  let isInitial = true;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(fetchAllMeals());
      isInitial = false;
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/* <Route path="login" element={<LoginPage />} /> */}
      {/* <Route path="profile" element={<ProfilePage />} /> */}
      {/* <Route path="create-account" element={<CreatAccount />} /> */}
      <Route path="cart" element={<Cart />} />
      <Route path="confirm-order" element={<OrderSuccessful />} />
    </Routes>
  );
};

export default App;
