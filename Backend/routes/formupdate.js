const express = require('express')
const {form_update_get} = require('../controllers/form_update_get')
const {form_update_post} = require(`../controllers/form_update_post`)
const router = express.Router()

router.get(`/`, form_update_get);

router.post(`/`, form_update_post);

module.exports = router