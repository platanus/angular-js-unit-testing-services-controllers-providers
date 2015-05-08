describe('todo list service tests', function(){

  var todoServObj;

  beforeEach(module('services'));

  beforeEach(inject(function(todoServ){
    todoServObj=todoServ;
  }));

  it('should have a list of tasks', function(){
    expect(todoServObj.list).not.toBeUndefined();
  });

  it('should add a task to the list of tasks', function(){
    todoServObj.addTask({
      name: 'My task',
      description: 'My task description'
    });

    expect(todoServObj.list.length).toBe(1);
    expect(todoServObj.list[0].name).toEq('My Task');
  });
});
