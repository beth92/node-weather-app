/*jshint esversion: 6 */
const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
const gc_api_key = 'AIzaSyAoclgzqaxH1vXgsXYt-9Y-T7nCVuus38s';
const ds_api_key = '925b700f962dda543b9bbf02dc4bb938';

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${gc_api_key}`;

// axios can be used to make a request which returns a promise

axios.get(geocodeUrl).then((response)=>{
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find that address.');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/${ds_api_key}/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl).then((response)=>{
    var temperature = response.data.currently.temperature;
    var feelsLike = response.data.currently.apparentTemperature;
    console.log(`Current temperature is ${temperature}, feels like ${feelsLike}`);
  });
}).catch((e)=>{
  if(e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers.');
  } else {
    console.log('Aborting:', e.message);
  }
});

console.log("Launching...");
