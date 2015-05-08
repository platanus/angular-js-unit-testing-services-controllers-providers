angular.module('controllers')
  .controller('TodoListController', todoListController);

  function todoListController(todoServ) {
    var vm = this;
    vm.list = todoServ.getList();
  };
