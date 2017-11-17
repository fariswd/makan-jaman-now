const mongoose = require('mongoose')
const FB = require('fb')
const userFbSchema = new mongoose.Schema({
  fb_id: String,
  name: String,
  email: String
})

function modelFb(token){
  return new Promise((resolve,reject) =>{
    FB.api('me',{fields : ['id','name','email'], access_token:token},(response)=>{
      resolve(response)
    })
})
}

const userFB= mongoose.model('fbuser',userFbSchema)

module.exports = {
  userFB,
modelFb
};

// const jwt = require('jsonwebtoken');
// const FB = require('fb');

// class Login {
//   static login(req, res, next) {
//     let fb = new FB.Facebook({
//       accessToken: req.body.accessToken,
//       appId: process.env.FBAPPID,
//       appSecret: process.env.FBAPPSECRET
//     })
//     fb.api(req.body.userId, function(response) {
//       if (response.error) {
//         res.status(400).json(response.error);
//       } else {
//         console.log(token);
//         var token = jwt.sign({
//           id: response.id,
//           name: response.name,
//         }, process.env.APPSECRET);
//         res.status(200).json(token);
//       }
//     });
//   }
// }

// module.exports = Login;