var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

var postsController = require('../controllers/posts');

router.route('/posts')
  .get(postsController.getAll)
  .post(postsController.createPost);

router.route('/posts/:id')
  //SHOW a specific post
  .get(postsController.getPost)

module.exports = router