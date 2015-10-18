var Post = require('../models/Post');

// GET
function getAll(req, res) {
  Post.find(function(err, posts) {
    if(err) res.json({message: 'Could not find any posts'});

    res.json(posts);
  }).select('-__v');
}


function getPost(req, res) {
  // console.log(req.params)
  var id = req.params.id
  Post.findById({_id: id}, function(err, post) {
    if(err) res.json({message: 'Could not find the post b/c:' + err})

    res.json({post: post})
  })
}

// POST
function createPost(req, res) {
  console.log('in POST');
  console.log('body:',req.body);

  var post = new Post(req.body);

  post.save(function(err) {
    if(err) res.json({messsage: 'Could not ceate post b/c:' + err});

    res.json(post);
  });
}

module.exports = {
  getAll: getAll,
  getPost: getPost,
  createPost: createPost
}