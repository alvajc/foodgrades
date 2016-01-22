var express = require('express');
var app = express();
var yelpApi = require('./js/yelp.js');
var scoreApi = require('./js/score.js');
app.use('/search', yelpApi);
app.use('/score', scoreApi);
app.use('/images', express.static('images'));

app.use(express.static('./'));


app.listen(1337);
console.log('Listening on localhost:1337');