const testObject = require('./objects');

function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
    
    const map = {}
    for ( let property in obj ){
      map[property] = cb(obj[property]);
    }
    return map;
  }

  cb = x => "mapped:"+ x;

  module.exports = mapObject;

  