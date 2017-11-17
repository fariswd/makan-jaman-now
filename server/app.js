require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const unirest = require('unirest');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/makan')

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(cors())

//routers
const index = require('./routers/index')
const weather = require('./routers/weather')
const zomato = require('./routers/zomato')

//index
app.use('/', index)

//weather API
app.use('/', weather)

//zomato API
app.use('/api/zomato', zomato)
const user = require('./routers/user')
const userfb = require('./routers/userFb')

app.use('/', index)
//fbLogin
app.use('/api/login', userfb)
// app.use('/user',userFb)

//listen
app.listen(3000, () => console.log('Port 3000!'))