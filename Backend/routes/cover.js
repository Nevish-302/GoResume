const express = require('express')
const design = require('../cover_letters/design')
const router = express.Router()
const verifyToken = require('../middleware/auth')

router.get('/design', verifyToken, design)

module.exports = router