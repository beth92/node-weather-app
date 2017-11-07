/*jshint esversion: 6 */
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather.js');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
  if (errorMessage){
    console.log(errorMessage);
  } else {
    console.log(`Weather at ${results.address}: `);
    weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults)=>{
      if(errorMessage){
        console.log(errorMessage);
      } else {
        console.log(`Current temperature is ${weatherResults.temperature}, feels like ${weatherResults.feelsLike}`);
      }
    });
  }
});
