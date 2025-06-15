const express = require("express");
const router = express.Router();
const {checkApiKey }= require("../middlewares/middleware");
const { downloadTikTok } = require("../controllers/tiktokController");

router.post("/", checkApiKey, downloadTikTok);

module.exports = router;
