const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(cors())

//routers
const index = require('./routers/index')


//index
app.use('/', index)


//listen
app.listen(3000, () => console.log('Port 3000!'))