
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(console.log);*/

/*clima.getClima(51.5085, -0.1257)
    .then(console.log)
    .catch(console.log);*/


const getInfo = async (direccion) => {

    try{
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.lugar} es de ${temp}.`;

    }catch(err){
        return `No se pudo determinar el clima de ${coords.direccion}.`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
