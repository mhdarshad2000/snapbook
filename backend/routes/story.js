const express = require("express");
const { postStory, getStories } = require("../controllers/story");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.put("/updateStory", authUser, postStory);
router.get("/getStories", authUser, getStories);

module.exports = router;
