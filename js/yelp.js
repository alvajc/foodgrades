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
  var businessSearch = req.body;
  console.log(businessSearch);
  yelp.business(businessSearch)
  .then(function(result) {
    console.log(result);
    var object = {
      name: result.name,
      address: result.location.display_address,
      phone: result.phone,
      rating: result.rating,
      reviewCount: result.review_count,
      reviews: result.reviews[0].excerpt

    }
      res.send(object);
  })

});

module.exports = yelpApi; 