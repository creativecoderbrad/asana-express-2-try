
const express = require('express');
const router = express.Router();

// post model
var Posts = require('../models/post');


// like a post

 router.post('/like/:id', function(req, res) {

  var query = { _id:req.params.id }

  Posts.findById( query, function (err, post ) {

      var curr = post.likes;
      post.likes = curr + 1;

      Posts.update( query, post, function(err) {
      if (err) {
        console.log(err);
      }
      else {
        res.redirect('/');
      }
    });
  });
});

// load more objects / get request

router.get("/loadmore", function(req, res) {

  Posts.find({ }, function (err, posts) {
    posts.reverse();
    res.send(posts);

  });
});


// search posts / tags





module.exports = router;
