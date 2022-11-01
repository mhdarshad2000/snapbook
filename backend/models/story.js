const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const storySchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
  createdAt: {
    type: {
      Date,
      expires: 10,
    },
  },
});

module.exports = mongoose.model("Story", storySchema);
