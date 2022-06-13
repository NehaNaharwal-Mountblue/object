const testObject = require('./objects');

function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults


    if(!obj){
        return {};
    }
    for(let keys in defaultProps){
        if(!obj.hasOwnProperty(keys)){
            obj[keys]=defaultProps[keys];
        }
    }
    return obj;

    
}

module.exports= defaults;
