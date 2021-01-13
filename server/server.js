const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage,generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'/../public');
const port = process.env.PORT || 3000;
const {isRealString} = require('./utils/validation');


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log('New user connected');

  socket.on('join', (params,callback)=>{
    if(!isRealString(params.name) || !isRealString(params.room)){
      callback('Name and room are required to join');
    }
    socket.join(params.room);
    socket.emit('newMessage',generateMessage('Admin','Welcome to chat app'));
    socket.broadcast.to(params.room).emit('newMessage',generateMessage('Admin',`${params.name} has joined`));
    callback();
  });

  socket.on('createMessage', (message,callback)=>{
    console.log('Message received', message);

    io.emit('newMessage',generateMessage(message.from , message.text));
    callback();
    // socket.broadcast.emit('newMessage',{
    //   from : message.from,
    //   text : message.text,
    //   createdAt : new Date().getTime()
    // });
  });

  socket.on('createLocationMessage', (coords)=>{
    io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude,coords.longitude));
  });
  socket.on('disconnect', ()=>{
    console.log('Client disconnected');
  });
});

server.listen(port,() => {
  console.log(`server is up on ${port}`);
});
