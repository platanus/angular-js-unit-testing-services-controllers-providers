describe('testing controllers', function(){

  // create service mockup 
  beforeEach(function(){
    module(function($provide){
      $provide.factory('todoServ', function(){
        function getList(){
          return [];
        }

        return {
          getList: getList
        };
      });
    });

    module('controllers');
  });

  // instantiate controller with mockup service
  beforeEach(inject(function($controller, todoServ){
    mockTodoServ = todoServ;

    todoListController = $controller('TodoListController', {
      todoServ: mockTodoServ
    });

  }));

  it('should have set pattern to match numbers', function(){
    expect(todoListController.list).toBeDefined();
  });

});

