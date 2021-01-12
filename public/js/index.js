var socket = io();
socket.on('connect',function(){
  console.log('connected to server');

  socket.emit('createMessage',{
    from: 'Rishabh Tyagi',
    text: 'I am good wbu',
    createdAt: 321
  });
});

socket.on('disconnect',function(){
  console.log('Disconnected from server');
});
socket.on('newMessage', function(message){
  console.log('New Message', message);
});
