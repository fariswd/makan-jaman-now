const zomatoModel = require('../models/zomato')

/* 
* get search from zomato
* require: query 'q', 'start'
* method: GET
* return obj
* header: "Accept: application/json"
*         "user-key: <process.env.API_ZOMATO>"
* url:    "https://developers.zomato.com/api/v2.1/search?q=ayam%20bakar"
*/
let search = (req, res) => {
  console.log(req.query.start);
  if(req.query.start != ''){
    zomatoModel.searchRestaurants(req.query.q, req.query.start, response=>{
      res.send(response);
    }) 
  } else {
    zomatoModel.searchRestaurants(req.query.q, 0, response=>{
      res.send(response);
    })
  }
}

module.exports = {
  search
};