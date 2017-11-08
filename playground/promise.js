/* jshint esversion: 6 */

var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if (typeof a == 'number' && typeof b == 'number'){
        resolve(a+b);
      } else {
        reject('Please provide numerical arguments.');
      }
    }, 1500);
  });
};

// Call constructir function for a promise.
// This constructor function takes one argument of type function
// That function takes two arguments, resolve and reject
// resolve and reject both represent functions to execute when appropriate
// promises are either 'fulfilled' or 'rejected'
/*var somePromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
  // normally this would be an object with more info but here we'll just use a message
    resolve('Hey, it worked!');
    reject('Unable to fulfill promise');
  },2500);
});

// 'then' accepts a function arg which gets called upon resolution
somePromise.then((message)=>{
  console.log('Success: ', message);
}, (errorMessage)=>{
  console.log('Error: ', errorMessage);
});*/

asyncAdd(5, '6').then((value)=>{
  console.log(value);
  return asyncAdd(value, 33);
}).then((value)=>{
  console.log('New value is', value);
}).catch((reason)=>{
  console.log(reason);
});
