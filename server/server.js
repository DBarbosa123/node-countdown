const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

// Start connection
io.on('connection', (socket) => {
  console.log('New user connected');

  // Emit Refresh
  socket.on('refreshCounter', () => {
    io.emit('doRefresh');
  });

  // Emit stop transfer
  socket.on('stopTransfer', () => {
    io.emit('doStop');
  });

  // Message on Disconnect
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

// Server start command
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
