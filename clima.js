const axios = require('axios');


const getClima = async (lat, lng) => {

	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=70e4a52a587611cbc73eb2b5e6034c4f&units=metric`);
	
	return resp.data.main.temp;

}
module.exports = {
	getClima
}
