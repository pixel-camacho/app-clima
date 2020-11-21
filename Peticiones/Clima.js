const axios =  require('axios');

const obtenerClima =  async (lat,lon)=>{

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=ff5d1b3ac4beed4acbae50c68de962d4&units=metric`);

    return res.data.main.temp;
}

module.exports = {obtenerClima};