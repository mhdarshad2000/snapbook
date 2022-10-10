const React = require("../models/reacts");
const mongoose = require("mongoose");
exports.reactPost = async (req, res) => {
  try {
    const { postId, react } = req.body;
    const check = await React.findOne({
      postRef: postId,
      reactBy: mongoose.Types.ObjectId(req.user.id),
    });
    if (check == null) {
      const newReact = new React({
        react: react,
        postRef: postId,
        reactBy: req.user.id,
      });
      await newReact.save();
    } else {
      if (check.react === react) {
        await React.findByIdAndRemove(check._id);
      } else {
        await React.findByIdAndUpdate(check_id, {
          react: react,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
