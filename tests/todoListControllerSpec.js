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

  beforeEach(inject(function($rootScope, $controller, dataSvc){
    rootScope = $rootScope;
    scope = $rootScope.$new();
    mockDataSvc = dataSvc;
    spyOn(mockDataSvc, 'save').and.callThrough();
  }));