const express = require("express");
const { uploadImages } = require("../controllers/upload");
const imageUploader = require("../middlewares/imageUploader");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/uploadImages", authUser, imageUploader, uploadImages);

module.exports = router;
