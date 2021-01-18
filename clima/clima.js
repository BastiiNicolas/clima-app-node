

const axios = require('axios');


const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6899fc9bfec29324afba68fcbda74361`);

    return resp.data.main.temp;
};


module.exports = {
    getClima
}
