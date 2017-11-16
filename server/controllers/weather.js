const unirest = require('unirest');

function checkWeather(req,res) {
	unirest.get(`https://simple-weather.p.mashape.com/weather?lat=${req.params.lat}&lng=${req.params.lng}`)
	.header("X-Mashape-Key", "uKmy6kzlGqmshyW832nbPPsNiTZvp1CbC6AjsnTnGJCRaTvjxs")
	.header("Accept", "text/plain")
	.end(function (result) {
		// res.send(result.status, result.headers, result.body)
		let keepWeather = result.body.split(" ");
		console.log(keepWeather)
		keepWeather.forEach((checkWeather, index) => {
			let weather = checkWeather.toLowerCase();
			if(weather == "rain" || weather == "thunderstorms"){
				res.send({message : "Hujan Cuy , kalo nekat pakai jas hujan cuy", weather :result.body})
			}else if(weather == "snow"){
				res.send({message : "Salju Cuy Dingin beud", weather :result.body})
			}else if(weather == "unknown"){
				res.send({message : "Sorry cuy Cuacanya Unknown ga Jelas", weather :result.body})
			}
			console.log(index,keepWeather.length-1)
			if(index == keepWeather.length-1){
				res.send({message : "Cuacanya aman cuy", weather :result.body})
			}
		})
		
	});	
}

module.exports = {
	checkWeather,
}
