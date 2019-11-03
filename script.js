var answer = "3";
var score = 0;
var questionNum = 0;
var myInterval;
var result = "3";
var gameOver = false;
var initialBtn = $(".initial-button");
var scores = [];
var scoreObject = {};



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
        if ($(event.target).text() == questions[questionNum].answer) {
            score = score + 20;
        }
        $('.content').hide();
        clearInterval(myInterval);
        gameOver = true;
        $(".game-over-page").show();
        $("#final-score-display").text("Your final score is " + score);
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



function saveInitials() {
    var userInitials = document.querySelector(".form-control").value;
    if (localStorage.getItem('scores')){
        scores =JSON.parse(localStorage.getItem('scores'));
    }
    scoreObject = {initials: userInitials, score: score};
    scores.push(scoreObject);
    localStorage.setItem('scores', JSON.stringify(scores));
    $(".hs").text("HIGH SCORE VIEW: " + scores[0].initials + " - " + scores[1].score
    );
    showHighScorePage();
};

function showHighScorePage() {
    $(".game-over-page").hide();
    $(".border").hide();
    $(".result").hide();
    $(".high-score-page").show();
};

initialBtn.click(saveInitials);