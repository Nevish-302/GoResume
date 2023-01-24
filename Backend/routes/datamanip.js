const express = require('express')
const {form_submit} = require('../controllers/form.js')
const {get_data, getDataById} = require('../controllers/get_data')
const router = express.Router()
const verifyToken = require('../middleware/auth')

router.post('/get', verifyToken, get_data);

router.post('/getById', getDataById);

router.post('/submit',verifyToken, form_submit)

module.exports = router