const express = require('express')
const {download} = require('../controllers/download');
const verifyToken = require('../middleware/auth');
const router = express.Router()

router.post(`/`, verifyToken, download);

module.exports = router