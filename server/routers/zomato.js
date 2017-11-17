const express = require('express')
const router = express.Router()

//require controllers
const zomato = require('../controllers/zomatoController')

router.get('/', zomato.search)

router.get('/search/', zomato.logSearch)

module.exports = router