// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // if obj is an array
  if (Array.isArray(obj)) {
    var results = [];

    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }

    results = results.join(',');

    return '[' + results + ']';
  }

  // if obj is an object
  if (typeof(obj) === 'object') {
    if (obj !== null) {
      var results = [];

      for (var key in obj) {
        if (typeof obj[key] === 'function' || obj[key] === undefined) {
          continue;
        } else {
          results.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
        }
      }

      results = results.join(',');

      return "{" + results + "}";
    }
  }

  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }

  // if obj is number, boolean, null
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  }

};
