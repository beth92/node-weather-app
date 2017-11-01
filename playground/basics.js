/*jshint esversion: 6*/

// playing with async js

console.log('Starting App');

// set timeout functions print after main() ends 

setTimeout(()=>{
  console.log('Inside of callback');
},1000);

setTimeout(()=>{
  console.log('Second timeout works');
}, 0);

console.log('Finishing Up');
