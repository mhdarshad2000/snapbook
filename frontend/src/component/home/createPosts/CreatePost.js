import "./style.css";
import { Photo, Feeling } from "../../../svg";

export default function CreatePost({ user, setVisible }) {
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={user.picture} alt="" />
        <div
          className="open_post hover2"
          onClick={() => {
            setVisible(true);
          }}
        >
          Share your feelings,{user?.first_name}
        </div>
      </div>
      <div className="create_splitter"></div>
      <div className="createPost_body">
        <div className="createPost_icon hover1">
          <Photo color="#4bbf67" />
          Photo/video
        </div>
        <div className="createPost_icon hover1">
          <Feeling color="#f7b928" />
          Feeling/Activity
        </div>
      </div>
    </div>
  );
}
