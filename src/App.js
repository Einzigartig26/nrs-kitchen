import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import HomePage from "./UI/HomePage";
import OrderSuccessful from "./Order/OrderSuccessful";

const App = () => {
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
