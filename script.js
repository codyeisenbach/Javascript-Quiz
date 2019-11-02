var answer = "3";
var score = 0;
var initials = "";
var questionNum = 0;
var myInterval;
var result = "3";
var gameOver = false;




$(".result").hide();
$(".game-over-page").hide();


// counter function

function startTimer(duration, display) {
    var timer = duration;
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


    if ($(event.target).text() == questions[questionNum].answer) {
        score = score + 20;
        questionNum++;
        $('.question-text').text(questions[questionNum].title);
        $('#answer-one').text(questions[questionNum].choices[0]);
        $('#answer-two').text(questions[questionNum].choices[1]);
        $('#answer-three').text(questions[questionNum].choices[2]);
        $('#answer-four').text(questions[questionNum].choices[3]);
        answer = true;

    }


    else if ($(".time").text() == 0) {
        gameOver = true;
        console.log(gameOver);
        $('.game-over-page').show();
    }

    else if (questionNum === 4) {
        $('.content').hide();
        clearInterval(myInterval);
        gameOver = true;
        console.log(gameOver);
        $('.game-over-page').show();
    }


    else {
        questionNum++;
        $('.question-text').text(questions[questionNum].title);
        $('#answer-one').text(questions[questionNum].choices[0]);
        $('#answer-two').text(questions[questionNum].choices[1]);
        $('#answer-three').text(questions[questionNum].choices[2]);
        $('#answer-four').text(questions[questionNum].choices[3]);
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