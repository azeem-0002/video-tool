const express = require("express");
const router = express.Router();
const {checkApiKey }= require("../middlewares/middleware");
const { downloadYouTube } = require("../controllers/youtubeController");

router.post("/",checkApiKey, downloadYouTube);
module.exports = router;
