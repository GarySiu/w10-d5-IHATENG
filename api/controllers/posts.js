var Post = require('../models/Post');

// GET
function getAll(req, res) {
  Post.find(function(err, posts) {
    if(err) res.json({message: 'Could not find any posts'});

    res.json({posts: posts});
  }).select('-__v');
}

// POST
function createPost(req, res) {
  console.log('in POST');
  console.log('body:',req.body);

  var post = new Post(req.body);

  post.save(function(err) {
    if(err) res.json({messsage: 'Could not ceate post b/c:' + err});

    res.json({post: post});
  });
}

module.exports = {
  getAll: getAll,
  createPost: createPost
}