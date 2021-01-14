const expect = require('expect');

const {Users} = require('./users');



describe('Users',()=>{
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id : '1',
      name : 'Rishabh',
      room : 'The friends'
    },{
      id : '2',
      name : 'Shikha',
      room : 'Hollow'
    },{
      id : '3',
      name : 'Favorite',
      room : 'The friends'
    }];
  });

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

  it('Should remove a user',()=>{
    var userId = '2';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a user',()=>{
    var userId = '7';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('Should find a user',()=>{
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });


  it('Should not find a user',()=>{
    var userId = '5';
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });


  it('Should return name for The friends',()=>{
    var userList = users.getUserList('The friends');
    expect(userList).toEqual(['Rishabh','Favorite']);
  });


  it('Should return name for Hollow',()=>{
    var userList = users.getUserList('Hollow');
    expect(userList).toEqual(['Shikha']);
  });
});
