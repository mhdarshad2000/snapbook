const express = require("express");
const { reactPost } = require("../controllers/react");
const { authUser } = require("../middlewares/auth");

const router = express.Router();
router.put('/reactPost',authUser,reactPost)

module.exports = router;
