const User = require("../models/user");

exports.postStory = async (req, res) => {
  const { url, text } = req.body;
  try {
    const story = await User.findByIdAndUpdate(req.user.id, {
      $push: {
        stories: {
          image: url,
          text: text,
          createdAt: new Date(),
        },
      },
    });
    res.json({ status: "ok" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getStories = async (req, res) => {
  try {
    const friends = await User.findById(req.user.id).select("friends");
    const stories = friends.friends.map(async (friend) => {
      return await User.findById(friend).select(
        "stories first_name last_name username picture"
      );
    });
    Promise.all(stories).then((story) => {
      const haveStory = story.filter((stor) => stor?.stories?.length > 0);
      res.json(haveStory);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
