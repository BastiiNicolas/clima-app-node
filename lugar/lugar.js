

const axios = require('axios');

const getLugarLatLng = async ( direccion ) => {

    const encodedUrl = encodeURI(direccion);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&APPID=6899fc9bfec29324afba68fcbda74361`);

    if( resp.data.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data;
    const lugar = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        lugar,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}
