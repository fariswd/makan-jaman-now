const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/makan')

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(cors())

//routers
const index = require('./routers/index')
const user = require('./routers/user')
const userFb = require('./routers/userFb')

//index
app.use('/', index)
app.use('/user', user)
app.use('/userFb',userFb)

//listen
app.listen(3000, () => console.log('Port 3000!'))