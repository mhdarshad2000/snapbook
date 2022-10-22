import "./style.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  acceptRequset,
  cancelRequests,
  deleteRequest,
} from "../../functions/user";

export default function Card({ userr, type, getData }) {
  const { user } = useSelector((user) => ({ ...user }));
  const cancelRequestHandler = async (id) => {
    const res = await cancelRequests(id, user.token);
    if (res === "ok") {
      getData();
    }
  };
  const confirmRequest = async (id) => {
    const res = await acceptRequset(id, user.token);
    if (res === "ok") {
      getData();
    }
  };
  const deleteRequestHandler = async (id) => {
    const res = await deleteRequest(id, user.token);
    if (res === "ok") {
      getData();
    }
  };
  return (
    <div className="req_card">
      <Link to={`/profile/${userr.username}`}>
        <img src={userr.picture} alt="" />
      </Link>
      <div className="req_name">
        {userr.first_name} {userr.last_name}
        {type === "sentRequest" ? (
          <button
            className="blue_btn"
            onClick={() => cancelRequestHandler(userr._id)}
          >
            Cancel Requests
          </button>
        ) : type === "request" ? (
          <>
            <button
              className="blue_btn"
              onClick={() => confirmRequest(userr._id)}
            >
              Confirm
            </button>
            <button
              className="gray_btn"
              onClick={() => deleteRequestHandler(userr._id)}
            >
              Delete
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
