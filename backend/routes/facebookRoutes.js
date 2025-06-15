const express = require("express");
const router = express.Router();
const {checkApiKey }= require("../middlewares/middleware"); // import your middleware
const { downloadFacebook } = require("../controllers/facebookController");

// Apply middleware before the route handler
router.post("/", checkApiKey, downloadFacebook);

module.exports = router;
