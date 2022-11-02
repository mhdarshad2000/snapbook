import { Avatar, Grid } from "@mui/material";
import { StoryRound } from "../../../styledComponent/styled";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import AddStory from "./AddStory";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Axios } from "../../../helpers/Axios";
import ShowStory from "./ShowStory";

export default function Story() {
  const { user } = useSelector((state) => ({ ...state }));
  const [story, setStory] = useState(false);
  const [stories, setStories] = useState([]);
  const [showStory, setShowStory] = useState(false);
  const [singleStory, setSingleStory] = useState([]);
  useEffect(() => {
    getStories();
  }, []);
  const getStories = async () => {
    try {
      const { data } = await Axios.get("/getStories", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setStories(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <StoryRound onClick={() => setStory(true)}>
              <AddIcon sx={{ color: "gray", fontSize: "50px" }} />
            </StoryRound>
            {stories.length
              ? stories.map((story, i) => (
                  <StoryRound border={"3px solid #16a112"} key={i}>
                    <Avatar
                      src={story.picture}
                      sx={{
                        width: "103px",
                        height: "103px",
                        objectFit: "cover",
                      }}
                      onClick={() => {
                        setShowStory(true);
                        setSingleStory(story);
                      }}
                    />
                  </StoryRound>
                ))
              : ""}
          </Box>
          {story && <AddStory user={user} setStory={setStory} />}
          {showStory ? (
            <ShowStory
              story={singleStory}
              setShowStory={setShowStory}
              stories={stories}
              setStories={setStories}
            />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </>
  );
}
