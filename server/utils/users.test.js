const expect = require('expect');

const {Users} = require('./users');



describe('Users',()=>{
  it('Should add users',()=>{
    var users = new Users();
    var user = {
      id : '123',
      name : 'Rishabh',
      room : 'First one'
    };
    var resUser = users.addUser(user.id,user.name,user.room);

    expect(users.users).toEqual([user]);
  });
});
