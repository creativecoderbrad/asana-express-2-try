

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/express-to-learn');
var db = mongoose.connection;


//check connection
db.once('openUri', function(){
  console.log('Connected to mongoDB ...');
});

// check for db err
db.on('error', function(err){
  console.log(err);
});

// initialiase app
var app = express();

// bring in models
var Posts = require('./models/post')

// bring in pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

// set public folder
app.use(express.static(path.join(__dirname, 'public')));


// home route
app.get('/', function(req, res) {

  Posts.find({ }, function (err, posts) {

    posts.reverse();

    res.render('index', {
      posts: posts
    });

  });
});

// add submit post route

app.post('/posts/add', function(req, res){

  // time stamp

  function time () {
    var time = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var getday = time.getDay();

    var hour = time.getHours();
    var min  = time.getMinutes();
    var sec  = time.getSeconds();

    if (min < 10) {
      min = '0' + min;
    }

    if (sec < 10) {
      sec = '0' + sec;
    }

    var fulltime = days[getday] + ' at ' + hour + ':' + min + ':' + sec
    return fulltime;
  }

  // new object
  var post = new Posts();
  // our parsed data
  post.author = req.body.author;
  post.posted = time();
  post.body = req.body.body;

  // try adding static built array
  post.tags = ['blessed', 'happy'];

  post.save( function (err) {
    if (err) {
      console.log(err);
      return
    }
    else {
      res.redirect('/');
    }
  });
});



app.post('/ajax', function (req, res){

   var tags = req.body.arr;

   for (var currTag = 0; currTag < tags.length; currTag ++) {
     console.log(tags[currTag]);
   }

   res.json({ success: true  });

});

// start server
app.listen(3000, function(req, res) {

});


//
