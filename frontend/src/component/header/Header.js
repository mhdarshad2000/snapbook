import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import SearchMenu from "./SearchMenu";
import { Search, HomeActive, Friends, Home } from "../../svg";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { FaFacebookMessenger } from "react-icons/fa";

export default function Header({ getAllPosts, page }) {
  const color = "#65676b";
  const user = useSelector((user) => ({ ...user }));
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  return (
    <header>
      <div className="header_left">
        <Link to="/">
          <div className="header_logo">Snapbook</div>
        </Link>
        {showSearchMenu ? (
          ""
        ) : (
          <div
            className="search search_1"
            onClick={() => setShowSearchMenu(true)}
          >
            <Search color={color} />
            <input type="text" placeholder="Search.." className="hide_input" />
          </div>
        )}
      </div>

      {showSearchMenu && (
        <SearchMenu color={color} setShowSearchMenu={setShowSearchMenu} />
      )}
      <div className="header_middle">
        <Link
          to="/"
          className={`middle_icon ${page === "home" ? "active" : "hover1"}`}
          onClick={() => getAllPosts()}
        >
          {page === "home" ? <HomeActive /> : <Home color={color} />}
        </Link>
        <Link
          to="/friends"
          className={`middle_icon ${page === "friends" ? "active" : "hover1"}`}
        >
          <Friends color={color} page={page} />
        </Link>
        <Link
          to="/messenger"
          className={`middle_icon ${
            page === "messenger" ? "active" : "hover1"
          }`}
        >
          <FaFacebookMessenger className="messenger" />
        </Link>
      </div>
      <div className="header_right">
        <Link to="/profile" className="profile_link hover1">
          <img src={user.user.picture} alt="" />
          <span>{user.user.first_name}</span>
        </Link>
        <Logout />
      </div>
    </header>
  );
}
