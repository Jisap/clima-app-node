const axios = require('axios');

const getClima = async (lat,lng) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9999f276020fcb68f5e3aea51fd2e396&units=metric`)

    return resp.data.main.temp 

}

module.exports = {

    getClima
}