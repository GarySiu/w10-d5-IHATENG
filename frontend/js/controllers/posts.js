angular
  .module('hateApp')
  .controller('PostsController', PostsController)

PostsController.$inject = ['$resource']

function PostsController($resource) {
  var vm = this;

  var Post = $resource('http://localhost:3000/posts/:id', { id: '@_id' })
  vm.posts = Post.query();

  vm.showForm = false;
}