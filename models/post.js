const mongoose = require('mongoose');

// listing schema

var postsSchema = mongoose.Schema({

  author: {
    type: String,
    required: true
  },
  posted: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  likes: {
    Type: Number,
    default: 0
  }

});

//

var Posts = module.exports = mongoose.model('posts', postsSchema);
