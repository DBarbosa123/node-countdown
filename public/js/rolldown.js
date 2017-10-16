const messages = document.getElementById('messages');

function appendMessage() {
  const message = document.getElementsByClassName('message')[0];
  var newMessage = message.cloneNode(true);
  var rand = PrintTimeZ();
  if(rand % 2 == 0) {
    newMessage.querySelector('strong').innerHTML = '<span class="texttow"> 192.168.0.1 Tower International Data ... ' + rand + '</span>';
  } else
  {
    newMessage.querySelector('strong').innerHTML = '<span class="texttow"> 192.168.0.1 Tower Automotive Data ... ' + rand + '</span>';
  }
  messages.appendChild(newMessage);
}

function getMessages() {
  shouldScroll = messages.scrollTop + messages.clientHeight === messages.scrollHeight;
  appendMessage();
  if (!shouldScroll) {
    scrollToBottom();
  }
}

function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}

function PrintTimeZ() {
    var d = new Date();
    var n = d.getTime();
    return n;
}

scrollToBottom();

setInterval(getMessages, 150);