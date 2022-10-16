import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NotLoggedInRoute from "../protectedRouters/NotLoggedInRoute";
import LoggedInRouter from "../protectedRouters/LoggedInRouter";
import Login from "../pages/login";
import Register from "../pages/register/Register";
import Profile from "../pages/profile";
import Activate from "../pages/home/Activate";
import Home from "../pages/home/Index";
import { Axios } from "../helpers/Axios";
import { useState, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { postsReducer } from "../functions/Reducers";
import CreatePostPopup from "../component/home/createPostPopup/CreatePostPopup";

export default function UserRouter() {
  const { user } = useSelector((state) => ({ ...state }));
  const [visible, setVisible] = useState(false);
  const [{ loading, error, posts }, dispatch] = useReducer(postsReducer, {
    loading: false,
    error: "",
    posts: [],
  });
  useEffect(() => {
    getAllPosts();
  }, [user]);

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
    <Fragment>
      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
      <Routes>
        <Route element={<NotLoggedInRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<LoggedInRouter />}>
          <Route
            path="/profile"
            element={<Profile setVisible={setVisible} />}
          />
          <Route
            path="/profile/:username"
            element={<Profile setVisible={setVisible} />}
          />
          <Route path="/activate/:token" element={<Activate />} />
          <Route
            path="/"
            element={<Home setVisible={setVisible} posts={posts} loading={loading} />}
          />
        </Route>
      </Routes>
    </Fragment>
  );
}
