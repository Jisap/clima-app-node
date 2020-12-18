//npm init
//npm i --save yargs
//npm i axios

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion)    //Del archivo lugar.js necesitamos usar getLugarLatLng 
//    .then(console.log)                  //con el argumento que le damos por consola
                                          //Como getLugar es async devuelve una promesa
                                          //y así obtenemos la respuesta.

//clima.getClima(40, 139)
//    .then(console.log)
//    .catch(console.log)

const getInfo = async (direccion) => {  // Cuando escribimos por consola node app -d "" invocamos a la función getInfo

    try{

        const coords = await lugar.getLugarLatLng(direccion);
        console.log(coords);
        const temp = await clima.getClima(coords.lat, coords.lng);
        console.log(temp);

        return `El clima de ${coords.Location} es de ${temp}`;
    
    }catch (e){
        return `No se pudo determinar el clima de ${direccion}, error: ${e}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
