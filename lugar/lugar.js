const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);//Formateamos la dirección para que no haya errores
    
    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${encodedUrl}&key=2a64eb0f774b40288613de610c414deb`
    });
    
    const resp = await instance.get();
       
        if (resp.data.results.length === 0 ) { // Si no existe una dirección
            throw new Error(`No hay resultados para la ${direccion}`);
        }

        const data = resp.data.results[0];          //El servidor nos dará una resp.data --> results y solo necesitaremos [0]
        const Location = data.components.city;      //Dentro de results buscamos lo que necesitemos.
        const lat = data.annotations.DMS.lat;
        const lng = data.annotations.DMS.lng;

    return {
        Location,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}

