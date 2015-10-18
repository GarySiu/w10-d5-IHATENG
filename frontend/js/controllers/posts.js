angular
  .module('hateApp')
  .controller('PostsController', PostsController)

PostsController.$inject = ['$resource']

function PostsController($resource) {
  var vm = this;
  vm.title = "I H A T E A N G U L A R";

  var Post = $resource('http://localhost:3000/posts/:id', { id: '@_id' })
  vm.posts = Post.query();

}