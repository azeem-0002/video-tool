const express = require('express');
const router = express.Router();
const {checkApiKey }= require("../middlewares/middleware");
const { downloadUniversal } = require('../controllers/universalController');

router.post('/', checkApiKey, downloadUniversal);

module.exports = router;
