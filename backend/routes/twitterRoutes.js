const express = require("express");
const router = express.Router();
const {checkApiKey }= require("../middlewares/middleware");
const { downloadTwitter } = require("../controllers/twitterController");

router.post("/",checkApiKey, downloadTwitter);
module.exports = router;
