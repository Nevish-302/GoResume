const express = require('express')
const {dashboard} = require('../controllers/dashboard')
const router = express.Router()

router.get(`/home`, dashboard)

module.exports = router