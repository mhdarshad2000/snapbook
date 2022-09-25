import { Link } from "react-router-dom";
import "./style.css";
import { Search,HomeActive, Friends } from "../../svg";
import Logout from "./Index"
import { useSelector } from "react-redux";
const color = "#65676b"

export default function Header() {
  const user = useSelector((user)=>({...user}))
  return (
    <header>
      <div className="header_left">
        <Link to="/">
          <div className="header_logo">Snapbook</div>
        </Link>
        <div className="search search_1">
          <Search color={color}/>
          <input type="text" placeholder="Search.." className="hide_input" />
        </div>
      </div>
      <div className="header_middle">
      <Link to="/" className="middle_icon hover1">
          <HomeActive color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Friends color={color}/>
        </Link>
      </div>
      <div className="header_right">
        <Link to="/profile" className="profile_link hover1">
          {user.user.first_name}
        </Link>
        <Logout />
      </div>
    </header>
  );
}
