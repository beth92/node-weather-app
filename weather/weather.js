/* jshint esversion: 6 */

const request = require('request');

const api_key = '925b700f962dda543b9bbf02dc4bb938';

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${api_key}/${lat},${long}`,
    json: true
  }, (error, response, body)=> {
    if(error){
      callback('Unable to reach weather server');
    }
    else if (response.statusCode !== 200){
      callback('Unable to fetch weather.');
    }
    else {
      callback(undefined, {
        temperature: body.currently.temperature,
        feelsLike: body.currently.apparentTemperature
      });
    }
  });
};


module.exports = {
  getWeather
};
