const express = require('express')
const {form_fill, form_submit} = require('../controllers/form.js')
const router = express.Router()
const verifyToken = require('../middleware/auth')

router.get('/fill', verifyToken, form_fill);

router.post('/submit', verifyToken, form_submit)

module.exports = router