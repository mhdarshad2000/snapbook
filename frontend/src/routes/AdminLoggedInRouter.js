import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function AdminLoggedInRouter() {
  const { admin } = useSelector((state) => ({ ...state }));
  return admin ? <Outlet /> : <Navigate to="/admin" />;
}
