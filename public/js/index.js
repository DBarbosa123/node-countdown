var socket = io();

socket.on('connect', function() {
  console.log('Connected to Server');
});


socket.on('disconnect', function() {
   console.log('Disconnected from Server');
});


function rrefresh () {
  socket.emit('refreshCounter');
  return false;
}

socket.on('newEmail', function(email) {
  console.log(email.from);
});
