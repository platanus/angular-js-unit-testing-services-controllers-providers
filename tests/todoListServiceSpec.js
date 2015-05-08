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
    expect(todoServObj.getTask(763).name).toBe('My task');
  });

  describe('filled list', function() {
    beforeEach(function(){
      for (var i = 10; i >= 1; i--) {
        todoServObj.addTask({
          id: i,
          name: 'My task ' + i,
          description: 'My task description ' + i
        });
      }
    });

    it('should allow me to remove a task', function(){
      expect(todoServObj.list.length).toBe(10);
      todoServObj.removeTask(6);
      expect(todoServObj.list.length).toBe(9);
      expect(todoServObj.getTask(6)).toBeNull();
    });

  describe('using a list that has elements that are easy to identify when sorted',function() {
    beforeEach(function(){
      todoServObj.addTask({
        id: 106,
        name: 'ZZZ last task ',
        description: 'My task description '
      });
      todoServObj.addTask({
        id: 104,
        name: 'A first task ',
        description: 'My task description '
      });
    });

    it('should allow me to sort the list by name', function() {
      var taskA = todoServObj.getTask(104);
      var taskB = todoServObj.getTask(106);

      expect(todoServObj.getPosition(taskA)).toBeGreaterThan(todoServObj.getPosition(taskB));
      todoServObj.resort();
      expect(todoServObj.getPosition(taskA)).toBeLessThan(todoServObj.getPosition(taskB));
    });
  });

  });

});
