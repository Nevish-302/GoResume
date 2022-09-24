const express = require('express')
const {dashboard} = require('../controllers/dashboard')
const router = express.Router()

router.get(`/`, (req, res) => dashboard)

module.exports = router