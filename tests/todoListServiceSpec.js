describe('todo list service tests', function(){

  var todoServObj;

  beforeEach(module('services'));

  beforeEach(inject(function(todoServ){
    todoServObj=todoServ;
  }));

  it('should have a list of tasks', function(){
    expect(todoServObj.list).not.toBeUndefined();
  });

});
