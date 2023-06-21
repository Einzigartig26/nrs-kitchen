import React, { useContext } from "react";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogoutButton = () => {
    // cartContext.userAuthentication();
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogoutButton}>Logout</button>
    </div>
  );
};

export default ProfilePage;
