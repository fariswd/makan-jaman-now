const express = require('express')
const router = express.Router()
const user = require('../controllers/indexController')

router.get('/',user.findAllUser)

module.exports = router;