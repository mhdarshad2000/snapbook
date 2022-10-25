const Admin = require("../models/admin");
const User = require("../models/user");
const Post = require("../models/posts");
const bcrypt = require("bcrypt");
const { generateAdminToken } = require("../helpers/token");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin)
      return res.status(400).json({ message: "You are not authorized" });
    const check = await bcrypt.compare(password, admin.password);
    if (!check)
      return res.status(400).json({ message: "Bad Credentials Enterred" });
    const token = generateAdminToken({ id: admin._id.toString() }, "7d");
    res.send({
      id: admin._id,
      username: admin.username,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select(
      "first_name last_name username picture email gender bYear bMonth bDay verified isBlocked"
    );
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.blockUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user.isBlocked) {
      await user.updateOne({ $set: { isBlocked: false } });
    } else {
      await user.updateOne({ $set: { isBlocked: true } });
    }
    res.status(200).json({ user, response: "ok" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const userPosts = await Post.find({ user: req.params.id })
      .populate("user", "first_name gender last_name picture username cover")
      .populate("comments.commentBy", "first_name last_name picture username");
      res.status(200).json(userPosts)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
