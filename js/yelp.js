var express = require('express');
var yelpApi = express.Router();
var bodyParser = require('body-parser');
var textParser = bodyParser.text();
var Yelp = require('yelp');

var yelp = new Yelp({
    consumer_key: "SI76ddR1WjDy52MAkwrsMw",
    consumer_secret: "84KCBA9CcNRLeDPtK2t9g14EWgw",
    token: "f0g8AbMavwHw7OBxRrjd8bj7UxWvMU6X",
    token_secret: "uivtfeCj2y6eVDFn29clxRHlBd0"
  });


yelpApi.post('/', textParser, function(req, res) {
  var keyword = req.body;
  console.log(keyword);
  yelp.business(keyword)
  .then(function(result) {
    res.sendStatus(result.name);
  })

});

module.exports = yelpApi; 