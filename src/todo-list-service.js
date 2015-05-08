(function(){
  angular.module('services')
    .service('todoServ', todoListService);

    function todoListService(){
      this.list = [];
      this.addTask = addTask;

      //////

      function addTask(task) {
        this.list.push(task);
      }
    }
})();
