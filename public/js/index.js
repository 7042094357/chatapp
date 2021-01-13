// var {generateMessage} = require('./../server/utils/message');

var socket = io();
socket.on('connect',function(){
  console.log('connected to server');
});

socket.on('disconnect',function(){
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
  console.log('New Message', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from} : ${message.text}`);

  jQuery('#messages').append(li);
});

// socket.emit('createMessage',generateMessage('Shikha','How is this going?'));

// socket.emit('createMessage',{
//   from : 'Shikha',
//   text : 'How is this going?'
// },function(msgs){
//   console.log('Got it',msgs);
// });

jQuery('#message-form').on('submit',function(e){
  e.preventDefault();

  socket.emit('createMessage',{
    from : 'User',
    text : jQuery('[name=message]').val()
  },function(){

  })
});
