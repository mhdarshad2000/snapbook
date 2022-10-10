const express = require("express");
const {
  register,
  activateAccount,
  login,
  sendVerification,
  auth,
  getProfile,
  updateProfilePicture,
  updateCoverPicture
} = require("../controllers/user");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerification);
router.get("/getProfile/:username", authUser, getProfile);
router.put("/updateProfilePicture", authUser, updateProfilePicture);
router.put("/updateCoverPicture", authUser, updateCoverPicture);


module.exports = router;
