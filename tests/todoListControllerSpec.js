describe('testing controllers', function(){
  var todoListController, mockTodoSvc;

  // create service mockup
  beforeEach(function(){
    module(function($provide){
      $provide.factory('todoServ', function(){
        function getList() {
          return [];
        }

        function addTask() {}

        return {
          getList: getList,
          addTask: addTask
        };
      });
    });

    module('controllers');
  });

  beforeEach(inject(function(todoServ){
    mockTodoSvc = todoServ;
    spyOn(mockTodoSvc, 'getList').and.callThrough();
    spyOn(mockTodoSvc, 'addTask').and.callThrough();
  }));

  // instantiate controller with mockup service
  beforeEach(inject(function($controller){
    todoListController = $controller('TodoListController', {
      todoServ: mockTodoSvc
    });
  }));

  it('should set the initial list', function(){
    expect(todoListController.list).toBeDefined();
    expect(mockTodoSvc.getList).toHaveBeenCalled();
  });

  it('should add a task', function() {
    var task = {
      id: 1,
      name: 'task name',
      decription: 'task description'
    };

    todoListController.addTask(task);

    expect(mockTodoSvc.addTask).toHaveBeenCalledWith(task);
  });

});

