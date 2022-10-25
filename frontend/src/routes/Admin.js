import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/adminPages/AdminLogin";
import AdminHome from "../pages/adminPages/AdminHome";
import AdminLoggedInRouter from "../protectedRouters/AdminLoggedInRouter";
import AdminNotLoggedInRouter from "../protectedRouters/AdminNotLoggedInRouter";
import Users from "../pages/adminPages/Users";
import Posts from "../pages/adminPages/Posts";

export default function AdminRouter() {
  return (
    <Routes>
      <Route element={<AdminNotLoggedInRouter />}>
        <Route path="/" element={<AdminLogin />} />
      </Route>
      <Route element={<AdminLoggedInRouter />}>
        <Route path="/home" element={<AdminHome />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts type="grid" />} />
        <Route path="/posts/:userId" element={<Posts type="single" />} />
      </Route>
    </Routes>
  );
}
