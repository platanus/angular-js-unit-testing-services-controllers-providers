describe('testing controllers', function(){
  var listController;

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

  beforeEach(inject(function($controller, todoServ){
    mockTodoServ = todoServ;

  }));

