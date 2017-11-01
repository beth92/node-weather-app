/* jshint esversion: 6*/

var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Vikram'
  };
  // assume second arg is a defined function which accepts 1 arg
  callback(user);
};

//synchronous callback. Here is where we define the callback function 
getUser(31, (user) => {
  console.log(user);
});
