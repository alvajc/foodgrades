var express = require('express');
var scoreApi = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

scoreApi.post('/', textParser, function(req, res) {
  var location = req.body;
  request('https://data.lacounty.gov/resource/3te6-gtm8.json?location_2=' + location, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var description = JSON.parse(body);
      console.log(description);
      var score;
      if (description.length > 0) {
        score = description[0].grade;
      } else {
        score = 'Unavailable';
      }
      res.send(score);
      console.log(score);
    }
  });
});

module.exports = scoreApi;