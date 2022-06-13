const testObject = require('./objects');

function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys

    //return Object.keys(obj);
  
    if(!obj){
      return []; 
  }
  let keys = [];
  for(let key in obj){
      keys.push(key);
  }
  return keys;

  }

  module.exports = keys;
 