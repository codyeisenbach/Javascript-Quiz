var answer = "3";
var score = 0;
var initials = "";
var questionNum = 0;
var myInterval;
var result = "3";
var gameOver = false;




$(".game-over-page").hide();


// counter function

function startTimer(duration, display) {
    var timer = duration;
    display.text(timer);
    if (--timer < 0) {
        timer = 0;
    }
    myInterval = setInterval(function () {
        display.text(timer);
        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

if (answer == 3) {
    $(".result").text("")
}




$("#start-button").click(function () {
    var timerTime = questions.length * 15,
        display = $(".time");
    startTimer(timerTime, display);
    $(".result").text("");
    $('.content').show();
    $("#start-button").hide();
    $('.question-text').text(questions[questionNum].title);
    $('#answer-one').text(questions[questionNum].choices[0]);
    $('#answer-two').text(questions[questionNum].choices[1]);
    $('#answer-three').text(questions[questionNum].choices[2]);
    $('#answer-four').text(questions[questionNum].choices[3]);
});


$(".answer-button").click(function () {




    if ($(".time").text() == 0 || questionNum == 4) {
        $('.content').hide();
        clearInterval(myInterval);
        gameOver = true;
        console.log(gameOver);
        $(".game-over-page").show();
    }

    else if ($(event.target).text() == questions[questionNum].answer) {
        score = score + 20;
        questionNum++;

        if (gameOver == false) {
        $('.question-text').text(questions[questionNum].title);
        $('#answer-one').text(questions[questionNum].choices[0]);
        $('#answer-two').text(questions[questionNum].choices[1]);
        $('#answer-three').text(questions[questionNum].choices[2]);
        $('#answer-four').text(questions[questionNum].choices[3]);
        }
        answer = true;

    }

    else {
        questionNum++;
        if (gameOver == false) {
        $('.question-text').text(questions[questionNum].title);
        $('#answer-one').text(questions[questionNum].choices[0]);
        $('#answer-two').text(questions[questionNum].choices[1]);
        $('#answer-three').text(questions[questionNum].choices[2]);
        $('#answer-four').text(questions[questionNum].choices[3]);
        }
        answer = false;
        var cTime = $(".time").text();
        var timeSub = cTime - 15;
        clearInterval(myInterval);
        startTimer(timeSub, $(".time"))
    };

    if (answer == true) {
        $(".result").text("Correct!")
    }
    else if (answer == false) {
        $(".result").text("Wrong!")
    }

    else {
        $(".result").text("")
    }
});