import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AdminLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    Cookies.set("admin", "");
    dispatch({ type: "ADMINLOGOUT" });
    console.log(122);
    navigate("/admin");
    console.log(122355);
  };
  return (
    <button
      className="logout"
      onClick={() => {
        logout();
      }}
    >
      Logout
    </button>
  );
}
