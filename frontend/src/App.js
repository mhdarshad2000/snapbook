import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/adminPages/AdminLogin";
import AdminHome from "./pages/adminPages/AdminHome";
import Home from "./pages/home/Index";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register/Register";
import LoggedInRouter from "./routes/LoggedInRouter";
import NotLoggedInRoute from "./routes/NotLoggedInRoute";
import AdminLoggedInRouter from "./routes/AdminLoggedInRouter";
import AdminNotLoggedInRouter from "./routes/AdminNotLoggedInRouter";
import CreatePostPopup from "./component/home/createPostPopup/CreatePostPopup";
import { useSelector } from "react-redux";
import Activate from "./pages/home/Activate";

function App() {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div>
      {/* <CreatePostPopup user={user} /> */}
      <Routes>
        {/* <Route element={<AdminNotLoggedInRouter />}> */}
        <Route path="/admin" element={<AdminLogin />} exact />
        {/* </Route> */}
        {/* <Route element={<AdminLoggedInRouter />}> */}
        <Route path="/adminhome" element={<AdminHome />} exact />
        {/* </Route> */}
        <Route element={<NotLoggedInRoute />}>
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
        </Route>
        <Route element={<LoggedInRouter />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/activate/:token" element={<Activate />} exact />
          <Route path="/" element={<Home />} exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
