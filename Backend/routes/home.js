const express = require('express')
const {dashboard} = require('../controllers/dashboard')
const verifyToken = require('../middleware/auth')
const router = express.Router()

router.get(`/`, verifyToken,dashboard)

module.exports = router