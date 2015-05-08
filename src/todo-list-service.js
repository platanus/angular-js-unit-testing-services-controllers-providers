(function(){
  angular.module('services')
    .service('todoServ', todoListService);

    function todoListService(){
      this.list = [];
      this.addTask = addTask;
      this.getTask = getTask;
      this.removeTask = removeTask;

      //////

      function addTask(task) {
        this.list.push(task);
      }

      function getTask(index) {
        return this.list[index] !== undefined ? this.list[index] : null;
      }

      function removeTask(index) {
        this.list.splice(index,1);
      }
    }
})();
