const testObject = require('./objects');

function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values

    const values = [];
    for ( let property in obj ) {
      (typeof obj[property] === "function") ? null : values.push(obj[property])
    }
    return values;
  }

  module.exports = values;
