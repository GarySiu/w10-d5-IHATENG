angular
  .module('hateApp')
  .controller('PostsController', PostsController)

function PostsController() {
  vm = this;
  vm.title = "I H A T E A N G U L A R";
}