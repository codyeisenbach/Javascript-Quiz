




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(timer);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}



jQuery(function ($) {
    var timerTime = questions.length * 15,
        display = $(".time");
    startTimer(timerTime, display);
});

/*
setTimeout(function(){
    alert($('.time').text());
    } ,3000)
*/



