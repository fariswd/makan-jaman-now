const unirest = require('unirest');

function checkWeather(req,res) {
	unirest.get(`https://simple-weather.p.mashape.com/weather?lat=${req.params.lat}&lng=${req.params.lng}`)
	.header("X-Mashape-Key", "uKmy6kzlGqmshyW832nbPPsNiTZvp1CbC6AjsnTnGJCRaTvjxs")
	.header("Accept", "text/plain")
	.end(function (result) {
		// res.send(result.status, result.headers, result.body)
		let keepWeather = result.body.split(" ");
		let getWeather = false;
		keepWeather.forEach((checkWeather,index) => {
			console.log(result.body)
			let weather = checkWeather.toLowerCase();
			if(weather == "rain" || weather == "thunderstorms" && getWeather == false ){
				getWeather = true;	
				res.send({message : "Hujan Cuy , kalo nekat pakai jas hujan cuy", weather :result.body})
			}else if(weather == "snow" && getWeather == false ){
				getWeather = true;
				res.send({message : "Salju Cuy Dingin beud", weather :result.body})
			}else if(weather == "unknown" && getWeather == false ){
				getWeather = true;
				res.send({message : "Sorry cuy Cuacanya Unknown ga Jelas", weather :result.body})
			}
			if(index == keepWeather.length-1 && getWeather == false){
				getWeather = true;
				res.send({message : "Cuacanya aman cuy", weather :result.body})
			}								
		})
	});	
}

module.exports = {
	checkWeather,
}
