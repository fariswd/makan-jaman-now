const zomatoModel = require('../models/zomato')
const zomatoDB = require('../models/zomatoDb')

/* 
* get search from zomato
* require: query 'q', 'start'
* method: GET
* return obj
* header: "Accept: application/json"
*         "user-key: <process.env.API_ZOMATO>"
* url:    "https://developers.zomato.com/api/v2.1/search?q=ayam%20bakar"
* endpoint: /api/zomato
*/
let search = (req, res) => {
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


/* 
* save searched keyword
* require: query 'keyword'
* method: GET
* return: obj.message = 'success' / 'fails'
* endpoint: /api/zomato/search
*/
let logSearch = (req, res) => {
  if(req.query.keyword == ''){
    res.send({message: "no keyword send"})
  } else {
    let keywordLog = new zomatoDB ({
        keyword: req.query.keyword
    })
    
    keywordLog.save()
    .then(result=>{
      res.send(result)
    }).catch(err=>{
      res.status(500).send(err)
    })
  }

}

module.exports = {
  search,
  logSearch
};