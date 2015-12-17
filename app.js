var express = require('express');
var app = express();
var yelpApi = require('./js/yelp.js');

app.use('/search', yelpApi);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/css/default.css', function(req, res) {
  res.sendFile(__dirname + '/css/default.css');
});

app.get('/js/default.js', function(req, res) {
  res.sendFile(__dirname + '/js/default.js');
});



app.listen(1337);
console.log('Server Up');