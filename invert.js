const testObject = require('./objects');

function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert

    const key = Object.keys(obj);
    const values = Object.values(obj);
    const inverted = []
    for ( let i = 0; i < key.length; i++) {
        inverted[i] = [values[i],key[i]];
    }
    return inverted;
  }

  module.exports = invert;
