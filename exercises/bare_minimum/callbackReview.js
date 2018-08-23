/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
let https = require('https');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function(filePath, callback) {
  let firstLine;

  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      callback(err);
    } else {
      callback(null, content.split('\n')[0]); //split on new line and take first
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = (url, callback) => {
  const options = {
    url: url,
    method: 'GET'
  };
  request(options, function(err, res, body) {
    if (err) {
      callback(err);
    } else {
      callback(null, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
