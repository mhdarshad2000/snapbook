import "./style.css";
import { useState, useRef } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import EmojiPickerBackground from "./EmojiPickerBackground";
import AddToYourPost from "./AddToYourPost";
import ImagePreview from "./ImagePreview";
import useClickOutside from "../../../helpers/useClickOutSide";
import { createPost } from "../../../functions/posts";

export default function CreatePostPopup({ user, setVisible }) {
  const [text, setText] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [background, setBackground] = useState("");
  const popup = useRef(null);
  useClickOutside(popup, () => {
    setVisible(false);
  });
  const postSubmit = async () => {
    if (background) {
      setLoading(true);
      const res = await createPost(
        null,
        background,
        text,
        null,
        user.id,
        user.token
      );
      setLoading(false);
      setBackground("");
      setText("");
    }
  };
  return (
    <div className="blur">
      <div className="postBox" ref={popup}>
        <div className="box_header">
          <div
            className="small_circle"
            onClick={() => {
              setVisible(false);
            }}
          >
            <i className="exit_icon"></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="box_profile">
          <img src={user?.picture} alt="" className="box_profile_img" />
          <div className="box_col">
            <div className="box_profile_name">
              {user?.first_name} {user?.last_name}
            </div>
            {/* <div className="box_privacy">
              <img src="../../../icons/public.png" alt="" />
              <span>Public</span>
              <i className="arrowDown_icon"></i>
            </div> */}
          </div>
        </div>

        {!showPreview ? (
          <>
            <EmojiPickerBackground
              text={text}
              setText={setText}
              user={user}
              showPreview={showPreview}
              setBackground={setBackground}
              background={background}
            />
          </>
        ) : (
          <ImagePreview
            text={text}
            setText={setText}
            user={user}
            images={images}
            setImages={setImages}
            setShowPreview={setShowPreview}
          />
        )}
        <AddToYourPost />
        <button
          className="post_submit"
          onClick={() => {
            postSubmit();
          }}
        >
          Post
        </button>
        <div className="post_loader">
          {loading && (
            <BounceLoader
              loading={loading}
              color="var(--blue-color)"
              size={30}
            />
          )}
        </div>
      </div>
    </div>
  );
}
