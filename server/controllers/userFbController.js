const Fbuser = require('../models/userFb')
const jwt = require('jsonwebtoken')
const FB = require('fb')


const login = (req,res)=>{
  console.log('ini token',req.headers.token);
    Fbuser.modelFb(req.headers.token)
    .then(data=>{
      console.log('inidata',data)
      var jwtToken= jwt.sign(data, process.env.SECRET_KEY)
      var decode = jwt.verify(jwtToken, process.env.SECRET_KEY)
      console.log('hasil decode----',decode);
      Fbuser.userFB.findOne({email:decode.email})
      .then(dataUser =>{
        console.log('inidata------user',dataUser);
        if(dataUser) {
          return -1
        }else{
          Fbuser.userFB.create({
            fb_id :decode.id,
            name: decode.name,
            email: decode.email
          })
          .then(created =>{
            console.log('oiiiiiiiiiii',created);
            res.send(created)
          })
          .catch(err =>{
            console.log('masukk');
            res.send(err)
          })
        }
      })
      // res.send({token: jwtToken})
    })
  // FB.api('/me',{fields: ['id','name','email']},(response)=>{
  //   console.log('iniresponse',response);
  //   fbuser.find({fb_id: response.id})
  //   .then(result =>{
  //     if(result.length === 0){
  //       console.log('blm ada usernya');
  //       db.create({
  //         fb_id: response.id,
  //         email: response.email,
  //         name: response.name
  //       })
  //       .then(rows =>{
  //         var dataFromFb = {
  //           id : rows._id,
  //           fb_id :rows.fb_id,
  //           email : rows.email,
  //           name :rows.name
  //         }
  //         var token = jwt.sign(dataFromFb, process.env.SECRET_KEY)
  //         res.send({token :token, name: rows.name, id: rows._id})
  //       })
  //       .cathch(err=>{
  //         res.send(err)
  //       })
  //     }else{
  //       console.log('usernya',result);
  //       var datafb= {
  //         id: result[0]._id,
  //         fb_id: result[0].fb_id,
  //         name: result[0].name
  //       }
  //       var token = jwt.sign(datafb, process.env.SECRET_KEY)
  //       res.send({token: token, name:result[0].name, id:result[0]._id})
  //     }
  //   })
  // })
}
module.exports = {login};