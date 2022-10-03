const express = require("express");
const { uploadImages } = require("../controllers/upload");
const imageUploader = require("../middlewares/imageUploader");

const router = express.Router();

router.post("/uploadImages", imageUploader, uploadImages);

module.exports = router;
