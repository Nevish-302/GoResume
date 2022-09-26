const express = require('express')
const {dashboard} = require('../controllers/dashboard')
const jwtauth = require('../middleware/auth')
const router = express.Router()

router.get(`/`, jwtauth,dashboard)

module.exports = router