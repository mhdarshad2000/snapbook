const express = require("express");
const { postStory } = require("../controllers/story");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/addStory", authUser, postStory);

module.exports = router;
