const testObject = require('./objects');

function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
  
    //return Object.entries(obj);

    if(!obj){
      return {};
  }
  let result = [];
  for(let index in obj){
      let value = [index , obj[index]];
      result.push(value);
  } 
  return result;

  }

  module.exports = pairs;

  
  
  