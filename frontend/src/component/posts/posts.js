import "./style.scss";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Public from "../../svg/public";
import Dots from "../../svg/dots";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post_header">
        <Link
          to={`/profile/${post.user.username}`}
          className="post_header_left"
        >
          <img src={post.user.picture} alt="" />
          <div className="post_profile_name">
            {post.user.first_name} {post.user.last_name}
            <div className="updated_p">
              {post.type == "profilePicture" &&
                `updated ${
                  post.user.gender === "male" ? "his" : "her"
                } profile picture`}
              {post.type == "cover" &&
                `updated ${
                  post.user.gender === "male" ? "his" : "her"
                } Cover picture`}
            </div>
          </div>
          <div className="post_profile_privacy_date">
            <Moment fromNow interval={30}>
              {post.createdAt}
            </Moment>
            . <Public color="#828387" />
          </div>
        </Link>
        <div className="post_header_right hover1">
          <Dots color="#828387" />
        </div>
      </div>
      {post.background ? (
        <div
          className="post_bg"
          style={{ backgroundImage: `url(${post.background})` }}
        >
          <div className="bg_text">{post.text}</div>
        </div>
      ) : (
        <>
          <div className="post_text">{post.text}</div>
          {post.images && post.images.length && (
            <div
              className={
                post.images.length === 1
                  ? "grid_1"
                  : post.images.length === 2
                  ? "grid_2"
                  : post.images.length === 3
                  ? "grid_3"
                  : post.images.length === 4
                  ? "grid_4"
                  : post.images.length >= 5 && "grid_5"
              }
            >
              {post.images.slice(0, 5).map((img, i) => (
                <img src={img.url} key={i} alt="" className={`img-${i}`} />
              ))}
              {post.images.length > 5 ? (
                <div className="more_pics_shadow">
                  +{post.images.length - 5}
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </>
      )}
      <div className="post_infos">
        <div className="reacts_count">
          <div className="reacts_count_imgs"></div>
          <div className="reacts_count_num"></div>
        </div>
        <div className="to_right">
          <div className="comments_count">13 comments</div>
          <div className="share_count">1 share</div>
        </div>
      </div>
      {/* video 5 (04.05 minutes) */}
    </div>
  );
}
