const express = require('express')
const design = require('../cover_letters/design')

const router = express.Router()

router.get('/design', design)

module.exports = router