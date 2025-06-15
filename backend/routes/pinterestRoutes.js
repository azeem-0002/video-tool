const express = require("express");
const router = express.Router();
const {checkApiKey }= require("../middlewares/middleware");
const { downloadPinterest } = require("../controllers/pinterestController");

router.post("/",checkApiKey, downloadPinterest);
module.exports = router;
