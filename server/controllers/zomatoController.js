const unirest = require('unirest');
require('dotenv').config()

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
  unirest.get(`https://developers.zomato.com/api/v2.1/search?q=${req.query.q}`)
  .headers({
    'Accept': 'application/json',
    "user-key": process.env.API_ZOMATO,
    'Content-Type': 'application/json'
  })
  .end(function (response) {
    res.send(response.body);
  });  
}

module.exports = {
  search
};