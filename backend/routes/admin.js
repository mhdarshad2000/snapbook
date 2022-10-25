const express = require("express");
const { login, getUsers, blockUser, getPosts } = require("../controllers/admin");
const { authAdmin } = require("../middlewares/authAdmin");
const router = express.Router();
router.post("/admin", login);
router.get("/admin/getUsers", authAdmin, getUsers);
router.put("/admin/blockUser/:id",authAdmin,blockUser)
router.get("/admin/getPosts/:id",getPosts)

module.exports = router;
