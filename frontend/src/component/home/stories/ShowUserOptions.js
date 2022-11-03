import React from "react";
import Stories from "react-insta-stories";
import Moment from "react-moment";
import { Box } from "@mui/material";
const stories = [];

export default function ShowUserOptions({ user, setUserOptions, setStory }) {
  user.stories.map((storyList) => {
    stories.push({
      url: storyList.image,
      header: {
        heading: `${user.first_name} ${user.last_name}`,
        subheading: <Moment fromNow>{storyList.createdAt}</Moment>,
        profileImage: `${user.picture}`,
      },
    });
  });
  console.log(user);
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
            setUserOptions(false);
            setStory(false);
          }}
        />
      </Box>
    </Box>
  );
}
