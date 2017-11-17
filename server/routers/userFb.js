var express = require('express');
var router = express.Router();
const usersFb = require('../controllers/userFbController')
const FB = require('fb')

const setAccessToken = (req, res, next) => {
  console.log('token', req.headers.token)
  FB.setAccessToken(req.headers.token);
  next()
}

router.post('/', setAccessToken, usersFb.login)

module.exports = router;
