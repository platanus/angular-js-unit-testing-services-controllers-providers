describe('todo list service tests', function(){
  it('should have a list of tasks', function(){
    expect(todoServ.list).not.toBeUndefined();
  });

});