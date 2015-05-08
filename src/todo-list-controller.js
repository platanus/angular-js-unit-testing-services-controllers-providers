angular.module('controllers')
  .controller('TodoListController', todoListController);

  function todoListController(todoServ) {
    var vm = this;

    vm.list = todoServ.getList();
    vm.addTask = addTask;

    /////////

    function addTask(task) {
      todoServ.addTask(task);
    }
  }
