const express = require('express')
const router = express.Router()

const Controller = require('../controllers/weather')

router.get('/weather/:lat/:lng', Controller.checkWeather)

module.exports = router