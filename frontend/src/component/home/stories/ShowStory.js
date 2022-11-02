import { Boxe } from "../../../styledComponent/styled";
import { Box } from "@mui/material";
import Stories from "react-insta-stories";
import Moment from "react-moment";
import { border } from "@mui/system";
const stories = [];

export default function ShowStory({ story, setShowStory, setStories }) {
  story.stories
    .sort((a, b) => {
      return a.createdAt - b.createdAt;
    })
    .map((storyList) => {
      stories.push({
        url: storyList.image,
        header: {
          heading: `${story.first_name} ${story.last_name}`,
          subheading: <Moment fromNow>{storyList.createdAt}</Moment>,
          profileImage: `${story.picture}`,
        },
      });
    });
  return (
    <Box className="blur">
      <Box className="story_view">
        <Stories
          stories={stories}
          defaultInterval={2000}
          width={400}
          height={625}
          isPaused={true}
          onAllStoriesEnd={() => {
            setShowStory(false);
          }}
        />
      </Box>
    </Box>
  );
}
