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
import { useReducer, useState } from "react";
import { Axios } from "./helpers/Axios";
import { useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "POST_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "POST_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function App() {
  const { user } = useSelector((state) => ({ ...state }));
  const [visible, setVisible] = useState(false);
  const [{ loading, error, posts }, dispatch] = useReducer(reducer, {
    loading: false,
    error: "",
    posts: [],
  });
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      dispatch({ type: "POST_REQUEST" });
      const { data } = await Axios.get("/getPosts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch({ type: "POST_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "POST_ERROR", payload: error.response.data.message });
    }
  };
  return (
    <div>
      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
      <Routes>
        <Route element={<AdminNotLoggedInRouter />}>
          <Route path="/admin" element={<AdminLogin />} />
        </Route>
        <Route element={<AdminLoggedInRouter />}>
          <Route path="/adminhome" element={<AdminHome />} />
        </Route>
        <Route element={<NotLoggedInRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<LoggedInRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/activate/:token" element={<Activate />} />
          <Route
            path="/"
            element={<Home setVisible={setVisible} posts={posts} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
