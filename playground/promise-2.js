/* jshint esversion: 6 */
const request = require('request');
const api_key='AIzaSyAoclgzqaxH1vXgsXYt-9Y-T7nCVuus38s';

var geocodeAddress = (address) => {
  return new Promise((resolve, reject)=>{

    var encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${api_key}`,
      //specifies that data returned should be treated as an object
      json: true
    }, (error, response, body) => {
      if(error){
        reject('Unable to connect to geolocation server.');
      } else if(body.status==='ZERO_RESULTS'){
        reject('Unable to find that address.');
      } else if(body.status=='OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      } else {
        reject(`Unknown error: status returned by server: ${body.status}`);
      }
    });

  });
};

geocodeAddress('!&%#&').then((value)=>{
  console.log(JSON.stringify(value, undefined, 2));
}, (reason)=>{
  console.log(reason);
});
