const mongoose = require('mongoose').connect('mongodb://localhost:27017/makan')

const searchSchema = mongoose.Schema({
  keyword: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const searchModel = mongoose.model('Search', searchSchema)

module.exports = searchModel;