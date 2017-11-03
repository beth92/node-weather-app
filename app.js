/*jshint esversion: 6 */

const request = require('request');
const yargs = require('yargs');

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

const api_key='AIzaSyAoclgzqaxH1vXgsXYt-9Y-T7nCVuus38s';
var encodedAddress = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${api_key}`,
  //specifies that data returned should be treated as an object
  json: true
}, (error, response, body) => {
  if(error){
    console.log('Unable to connect to geolocation server.');
  } else if(body.status==='ZERO_RESULTS'){
    console.log('Unable to find that address.');
  } else if(body.status=='OK'){
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  } else {
    console.log(`Unknown error: status returned by server: ${body.status}`);
  }
});
