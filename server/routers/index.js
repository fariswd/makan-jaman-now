const express = require('express')
const router = express.Router()
// const user = require('../controllers/indexController')
//require controllers
const indexs = require('../controllers/indexController')

router.get('/', indexs.wellcome)
router.post('/register',indexs.register)
router.post('/login', indexs.login)

module.exports = router