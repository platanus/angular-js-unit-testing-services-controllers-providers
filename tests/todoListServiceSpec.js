describe('todo list service tests', function(){

  var todoServObj;

  beforeEach(module('services'));

  beforeEach(inject(function(todoServ){
    todoServObj=todoServ;
  }));

  it('should have a list of tasks', function(){
    expect(todoServObj.list).not.toBeUndefined();
  });

  it('should let me add a task to the list of tasks', function(){
    todoServObj.addTask({
      id: 763,
      name: 'My task',
      description: 'My task description'
    });

    expect(todoServObj.list.length).toBe(1);
    expect(todoServObj.getTask(0).name).toBe('My task');
  });

  describe('filled list', function() {
    beforeEach(function(){
      for (var i = 10; i >= 1; i--) {
        todoServObj.addTask({
          id: i,
          name: 'My task ' + i,
          description: 'My task description ' + i
        });
      };
    });

    it('should allow me to remove a task', function(){
      expect(todoServObj.list.length).toBe(10);
      todoServObj.removeTask(6);
      expect(todoServObj.list.length).toBe(9);
      //expect(todoServObj.getTask(6)).toBeNull();
    });
  });

});
