const Post = require("../models/posts");

exports.createPost = async (req, res) => {
  try {
    const post = await new post(req.body).save();
    res.json(post)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
