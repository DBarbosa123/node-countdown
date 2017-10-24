var socket = io();

// socket.on('connect', function() {
//   console.log('Connected to Server');
// });

socket.on('doRefresh', function() {
  window.location.href = '/countdown.html'
});

socket.on('doStop', function() {
  window.location.href = '/connlost.html'
});

socket.on('youLost', function() {
  window.location.href = '/youlost2.html'
});
