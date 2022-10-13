const express = require("express");
const { createPost, getAllPosts, comment } = require("../controllers/posts");
const { authUser } = require("../middlewares/auth");
const router = express.Router();

router.post("/createPost", authUser, createPost);
router.get("/getPosts", authUser, getAllPosts);
router.put("/comment", authUser, comment);

module.exports = router;
