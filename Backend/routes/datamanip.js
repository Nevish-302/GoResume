const express = require('express')
const {form_submit} = require('../controllers/form.js')
const {get_data} = require('../controllers/get_data')
const router = express.Router()
const verifyToken = require('../middleware/auth')

router.get('/get', verifyToken, get_data);

router.post('/submit',verifyToken, form_submit)

module.exports = router