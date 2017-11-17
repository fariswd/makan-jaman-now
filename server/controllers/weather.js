const Model = require('../models/weather')

function checkWeather(req,res) {
	Model.getWeather(req.params.lat,req.params.lng).then(result => {
		console.log(result);
		let keepWeather = result.body.split(" ");
		let getWeather = false;
		keepWeather.forEach((checkWeather,index) => {
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
	}).catch(err => {
		console.log(err)
	})
}

module.exports = {
	checkWeather,
}
