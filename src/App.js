import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import HomePage from "./UI/HomePage";
import OrderSuccessful from "./Order/OrderSuccessful";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMeals, fetchCartMeals } from "./redux";

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchAllMeals());
    dispatch(fetchCartMeals());
  }, [dispatch, cart.stateUpdate]);

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
