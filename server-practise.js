
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


// initialiase app
var app = express();

// bring in pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home route
app.get('/', function(req, res) {


  var cottages = [
    {
      name: 'paradise grove',
      loc: 'devon',
      price: 599.00,
      sleeps: 5
    },
    {
      name: 'harbour point',
      loc: 'devon',
      price: 750.00,
      sleeps: 4
    },
    {
      name: 'sunrise cove',
      loc: 'cornwall',
      price: 890.00,
      sleeps: 7
    }
  ]

  var results = [];

    var a = ["a", "b", "c"];
  a.forEach(function(entry) {
      console.log(entry);
  });

  for (var i = 0; i < cottages.length; i++) {

    var curr = cottages[i];

    if (curr.sleeps < 9 ) {
      results.push(curr);
    }

  }

  res.render('index', {
    title: 'articles',
    cottages: results
  });

});

// start server
app.listen(3000, function(req, res) {
  console.log('started');
});


//
