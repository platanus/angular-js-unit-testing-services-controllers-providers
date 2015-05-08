(function(){
  angular.module('services')
    .service('todoServ', todoListService);

    function todoListService(){
      this.list = [];
      this.addTask = addTask;
      this.getTask = getTask;
      this.removeTask = removeTask;
      this.resort = resort;
      this.getPosition = getPosition;

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
        this.list.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }

      function getPosition(task) {
        return _.indexOf(this.list, task);
      }
    }
})();
