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
import Post from "../../component/posts/posts";
import Photos from "./Photos";

export default function Profile({ setVisible }) {
  const navigate = useNavigate();
  const { username } = useParams();
  const { user } = useSelector((state) => ({ ...state }));
  const [photos, setPhotos] = useState({});
  var userName = username === undefined ? user.username : username;
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: {},
    error: "",
  });

  useEffect(() => {
    getProfile();
  }, [userName]);
  var visitor = userName === user.username ? false : true;

  const path = `${userName}/*`;
  const max = 30;
  const sort = "desc";

  const getProfile = async () => {
    try {
      dispatch({
        type: "PROFILE_REQUEST",
      });
      const { data } = await Axios.get(`/getProfile/${userName}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (data.ok === false) {
        navigate("/profile");
      } else {
        try {
          const images = await Axios.post(
            "/listImages",
            { path, sort, max },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          setPhotos(images.data);
        } catch (error) {
          console.log(error);
        }
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
          <Cover
            cover={profile.cover}
            visitor={visitor}
            photos={photos.resources}
          />
          <ProfilePictureInfos
            profile={profile}
            visitor={visitor}
            photos={photos.resources}
          />
          <ProfileMenu />
        </div>
      </div>
      <div className="profile_bottom">
        <div className="profile_container">
          <div className="bottom_container">
            <div className="profile_grid">
              <div className="profile_left">
                <Photos
                  username={userName}
                  token={user.token}
                  photos={photos}
                />
              </div>
              <div className="profile_right">
                {!visitor && <CreatePost user={user} setVisible={setVisible} />}
                <GridPosts />
                <div className="posts">
                  {profile.posts && profile.posts.length ? (
                    profile.posts.map((post) => (
                      <Post key={post._id} post={post} user={user} profile />
                    ))
                  ) : (
                    <div className="no_post">No Posts To Display</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
