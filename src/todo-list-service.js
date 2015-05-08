(function(){
  angular.module('services')
    .service('todoServ', todoListService);

    function todoListService(){
      this.list = [];
      this.addTask = addTask;
      this.getTask = getTask;
      this.removeTask = removeTask;
      this.resort = resort;

      //////

      function addTask(task) {
        this.list.push(task);
      }

      function getTask(id) {
        return _.findWhere(this.list, { id: id }) || null;
      }

      function removeTask(id) {
        var index = _.findIndex(this.list, { id: id} );
        this.list.splice(index, 1);
      }

      function resort(){
        this.list = _.sortBy(this.list,function(t1,t2) {
          return t2.name < t1.name;
        })
      }
    }
})();
