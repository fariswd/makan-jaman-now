const express = require('express')
const router = express.Router()

//require controllers
const indexs = require('../controllers/indexController')

router.get('/', indexs.wellcome)

module.exports = router