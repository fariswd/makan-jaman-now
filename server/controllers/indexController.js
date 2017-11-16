const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

let wellcome = (req, res) => {
  res.send('di controllers')
}

var register = (req,res)=>{
  var salt = bcrypt.genSaltSync(10)
  var hash = bcrypt.hashSync(req.body.password, salt)
  User.create({
    username: req.body.username,
    password: hash,
    name : req.body.name,
    salt: salt
  })
  .then(data=>{
    res.send(data)
  })
  .catch (err=>{
    res.send(err)
  })
}

var findAllUser = (req,res)=>{
  User.find({})
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })
}

var login = (req, res) => {
  User.findOne({
    username: req.body.username
  })
  .then(data => {
    // console.log(data.password)
    if (bcrypt.compareSync(req.body.password, data.password)) {
      var token = jwt.sign({
        _id: data._id,
        username: data.username,
        name: data.name
      }, process.env.SECRET_KEY)
      res.send({token})
    }
    else {
      console.log("Invalid Password");
    }
  })
  .catch(err => {
    res.send("Username doesn't exist")
  })
}

// var hapusUser = (req,res)=>{
//   User.findByIdAndRemove({})
// }
module.exports = {
  wellcome,
  register,
  findAllUser,
  login
};