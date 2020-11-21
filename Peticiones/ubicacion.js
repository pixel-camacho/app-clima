const axios =  require('axios');

const obtenerUbicacion =  async (lugar)=>{

const uriState = encodeURI(lugar);

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${uriState}&APPID=ff5d1b3ac4beed4acbae50c68de962d4`);

    if(res.data.cod == 404){
        throw new Error(`No hay Resultados para ${lugar}`);
    }

    const name = res.data.name;
    const lon  = res.data.coord.lon;
    const lat  = res.data.coord.lat;

    return {
        name,
        lon,
        lat
    }
}

module.exports = {obtenerUbicacion};