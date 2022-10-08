import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { profileReducer } from "../../functions/Reducers";
import { Axios } from "../../helpers/Axios";
import Header from "../../component/header/Header";
import "./style.scss";
import Cover from "./Cover";
import ProfilePictureInfos from "./ProfilePictureInfos";
import ProfileMenu from "./ProfileMenu";
import CreatePost from "../../component/home/createPosts/CreatePost";
import GridPosts from "./GridPosts";

export default function Profile({ setVisible }) {
  const navigate = useNavigate();
  const { username } = useParams();
  const { user } = useSelector((state) => ({ ...state }));
  var userName = username === undefined ? user.username : username;
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: {},
    error: "",
  });

  useEffect(() => {
    getProfile();
  }, [userName]);

  const getProfile = async () => {
    try {
      dispatch({
        type: "PROFILE_REQUEST",
      });
      const { data } = await Axios.get(`getProfile/${userName}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (data.ok === false) {
        navigate("/profile");
      } else {
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  return (
    <div className="profile">
      <Header />
      <div className="profile_top">
        <div className="profile_container">
          <Cover profile={profile.cover} />
          <ProfilePictureInfos profile={profile} />
          <ProfileMenu />
        </div>
      </div>
      <div className="profile_bottom">
        <div className="profile_container">
          <div className="bottom_container">
            <div className="profile_grid">
              <div className="profile_left"></div>
              <div className="profile_right">
                <CreatePost user={user} setVisible={setVisible} />
                <GridPosts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
