const zomatoModel = require('../models/zomato')

/* 
* get search from zomato
* require: query 'q'
* method: GET
* return obj
* header: "Accept: application/json"
*         "user-key: <process.env.API_ZOMATO>"
* url:    "https://developers.zomato.com/api/v2.1/search?q=ayam%20bakar"
*/
let search = (req, res) => {
  zomatoModel.searchRestaurants(req.query.q, response=>{
    res.send(response);
  }) 
}

module.exports = {
  search
};