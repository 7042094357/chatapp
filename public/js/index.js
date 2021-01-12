var socket = io();
socket.on('connect',function(){
  console.log('connected to server');
  socket.emit('createEmail',{
    from: 'Rishabh Tyagi',
    text: 'I am good wbu',
    createdAt: 321
  })
});
socket.on('disconnect',function(){
  console.log('Disconnected from server');
});
socket.on('newEmail', function(email){
  console.log('New Email', email);
});
