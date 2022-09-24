const express = require('express')
const {download} = require('../controllers/download')
const router = express.Router()

router.post(`/`, download);

module.exports = router