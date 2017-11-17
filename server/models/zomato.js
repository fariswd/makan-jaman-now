const unirest = require('unirest');
require('dotenv').config()

const searchRestaurants = (keyword, cb) => {
  unirest.get(`https://developers.zomato.com/api/v2.1/search?q=${keyword}`)
  .headers({
    'Accept': 'application/json',
    "user-key": process.env.API_ZOMATO,
    'Content-Type': 'application/json'
  })
  .end(function (response) {
    let result = response.body
    
    let newrestaurant = []

    result.restaurants.forEach((r, i)=>{
      console.log(r.restaurant.thumb);
      if(r.restaurant.thumb != ""){
        newrestaurant.push(r.restaurant)
      }
    })

    result.newrestaurant = newrestaurant

    cb(result)
  });  
}

module.exports = {
  searchRestaurants
};