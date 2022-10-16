import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/adminPages/AdminLogin";
import AdminHome from "../pages/adminPages/AdminHome";
import AdminLoggedInRouter from "../protectedRouters/AdminLoggedInRouter";
import AdminNotLoggedInRouter from "../protectedRouters/AdminNotLoggedInRouter";

export default function AdminRouter() {
  return (
    <Fragment>
      <Routes>
        <Route element={<AdminNotLoggedInRouter />}>
          <Route path="/" element={<AdminLogin />} />
        </Route>
        <Route element={<AdminLoggedInRouter />}>
          <Route path="/home" element={<AdminHome />} />
        </Route>
      </Routes>
    </Fragment>
  );
}
