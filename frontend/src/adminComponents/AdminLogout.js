import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AdminLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    Cookies.set("admin", "");
    dispatch({ type: "ADMIN_LOGOUT" });
    navigate("/admin");
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
