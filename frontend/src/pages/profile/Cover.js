import { useState, useRef } from "react";
import useClickOutSide from "../../helpers/useClickOutSide";

export default function Cover({ cover }) {
  const [showCoverMenu, setShowCoverMenu] = useState(false);
  const menuRef = useRef(null);
  useClickOutSide(menuRef, () => setShowCoverMenu(false));
  return (
    <div className="profile_cover">
      {cover && <img src={cover} alt="" className="cover" />}
      <div className="update_cover_wrapper">
        <div
          className="open_cover_update"
          onClick={() => {
            setShowCoverMenu((prev) => !prev);
          }}
        >
          <i className="camera_filled_icon"></i>
          Add Cover Photo
        </div>
        {showCoverMenu && (
          <div className="open_cover_menu" ref={menuRef}>
            <div className="open_cover_menu_item hover1">
              <i className="photo_icon"></i>
              Select Photo
            </div>
            <div className="open_cover_menu_item hover1">
              <i className="upload_icon"></i>
              Upload Photo
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
