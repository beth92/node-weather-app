/*jshint esversion: 6 */

const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAoclgzqaxH1vXgsXYt-9Y-T7nCVuus38s',
  //specifies that data returned should be treated as an object
  json: true
}, (error, response, body) => {
  console.log(body);
});
