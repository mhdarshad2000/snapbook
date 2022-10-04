const express = require("express");
const { createPost } = require("../controllers/posts");
const { authUser } = require("../middlewares/auth");
const router = express.Router();

router.post("/createPost", authUser, createPost);
router.get("/me", (req, res) => {
  res.json({
    name: "arshad",
  });
});
module.exports = router;
