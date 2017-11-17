const unirest = require('unirest');


class Model {
	static getWeather(lat,lng) {
		return new Promise((resolve,reject) => {
			unirest.get(`https://simple-weather.p.mashape.com/weather?lat=${lat}&lng=${lng}`)
			.header("X-Mashape-Key", "uKmy6kzlGqmshyW832nbPPsNiTZvp1CbC6AjsnTnGJCRaTvjxs")
			.header("Accept", "text/plain")
			.end(function (result) {
				resolve(result);
			});	
		})
	}
}

module.exports = Model
