import { Plus } from "../../../svg";
import "./style.css";
import { stories } from "../../../data/left";
import StoryList from "./StoryList";

export default function Story() {
  return (
    <div className="stories">
      <div className="create_story_card">
        <img
          src="../../../images/default_pic.png"
          alt=""
          className="create_story_img"
        />
        <div className="plus_story">
          <Plus color="#fff" />
        </div>
      </div>
      {stories.map((story, i) => (
        <StoryList key={i} story={story} />
      ))}
    </div>
  );
}
