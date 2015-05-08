(function(){
  angular.module('services')
    .service('todoServ', todoListService);

    function todoListService(){
      this.list = [];
      this.addTask = addTask;
      this.getTask = getTask;

      //////

      function addTask(task) {
        this.list.push(task);
      }
      function getTask(index) {
        return this.list[index];
      }
    }
})();
