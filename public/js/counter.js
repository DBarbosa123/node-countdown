function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (timer == 10) {
          counter.play();
        }
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            setTimeout('youlost()',2000);
            //return youlost();
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 300,
        display = document.querySelector('#timerclock');
    startTimer(fiveMinutes, display);
};

function youlost() {
  window.location.href = '/youlost.html';
}
