var express = require('express');
var app = express();
var findAll = require('./src/review');

app.get('/api/v1/reviews', function (request, response) {
  findAll().then(function(review) {
    response.json(review);
  }, function(error) {
    response.status(404).json(error);
    // response.json({
    //   error: 'Cant find song'
    // });
  });
});

  // getSong(id).then(function(){
  //
  // }, function(){
  //
  // });

app.listen(8000);