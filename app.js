// REQUIRE
const argv  = require('./config/yargs').argv;
const ubicacion = require('./Peticiones/ubicacion');
const clima = require('./Peticiones/Clima');
 
;

const obtenerInformacion = async (direccion)=>{

    try {
        const coordenadas = await ubicacion.obtenerUbicacion(direccion);    
        const temperatura = await clima.obtenerClima(coordenadas.lat,coordenadas.lon);
             return `El clima de ${coordenadas.name} es de ${temperatura}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}, ${e}`; 
    }
}

obtenerInformacion(argv.direccion)
            .then(res => console.log(res))
            .catch(err => console.log(err));

