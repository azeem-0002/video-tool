const express = require("express");
const router = express.Router();
const {checkApiKey }= require("../middlewares/middleware");
const { downloadInstagram } = require("../controllers/instagramController");

router.post("/",checkApiKey, downloadInstagram);
module.exports = router;
