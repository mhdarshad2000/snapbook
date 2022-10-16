const Post = require("../models/posts");
const User = require("../models/user")

exports.createPost = async (req, res) => {
  try {
    const post = await new Post(req.body).save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    // const posts = await Post.find()
    //   .populate("user", "first_name last_name picture username gender")
    //   .sort({ createdAt: -1 });
    // res.json(posts);
    const friendsTemp = await User.findById(req.user.id).select("friends");
    const friends = friendsTemp.friends;
    const promises = friends.map((user) => {
      return Post.find({ user: user })
        .populate("user", "first_name last_name picture username")
        .populate("comments.commentBy", "first_name last_name picture username")
        .sort({ createdAt: -1 })
        .limit(10);
    });
    const friendsPosts = await (await Promise.all(promises)).flat();
    const userPosts = await Post.find({ user: req.user.id })
      .populate("user", "first_name last_name picture username")
      .populate("comments.commentBy", "first_name last_name picture username")
      .sort({ createdAt: -1 })
      .limit(10);
    friendsPosts.push(...[...userPosts]);
    friendsPosts.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    res.json(friendsPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.comment = async (req, res) => {
  try {
    const { comment, image, postId } = req.body;
    let newComment = await Post.findByIdAndUpdate(
      postId,
      {
        $push: {
          comments: {
            comment: comment,
            image: image,
            commentBy: req.user.id,
          },
        },
      },
      {
        new: true,
      }
    ).populate("comments.commentBy", "picture first_name last_name user");
    res.json(newComment.comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
