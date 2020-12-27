var answer = "3";
var score = 0;
var questionNum = 0;
var myInterval;
var result = "3";
var gameOver = false;
var initialBtn = $(".initial-button");
var highScoreBtn = $("#high-scores");
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
        gameOver = true;
        $(".game-over-page").show();
        $("#final-score-display").text("Your final score is " + score);
        clearInterval(myInterval);
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
        scores = JSON.parse(localStorage.getItem('scores'));
    }

    scoreObject = {initials: userInitials, score: score};

    scores.push(scoreObject);

    localStorage.setItem('scores', JSON.stringify(scores));

    const highScoreList = scores
    .sort(function (a, b) {
        return b.score - a.score;
      });

    console.log(highScoreList);


    $("#hs").text("TOP 5 SCORES: "),
    $("#hs1").text(scores[0].initials + ": " + scores[0].score)
    $("#hs2").text(scores[1].initials + ": " + scores[1].score)
    $("#hs3").text(scores[2].initials + ": " + scores[2].score)
    $("#hs4").text(scores[3].initials + ": " + scores[3].score)
    $("#hs5").text(scores[4].initials + ": " + scores[4].score)


    showHighScorePage();
};

function showScores() {

    if (localStorage.getItem('scores')){
        scores = JSON.parse(localStorage.getItem('scores'));
    }

    const highScoreList = scores
    .sort(function (a, b) {
        return b.score - a.score;
      });

    console.log(highScoreList);


    $("#hs").text("TOP 5 SCORES: "),
    $("#hs1").text(scores[0].initials + ": " + scores[0].score)
    $("#hs2").text(scores[1].initials + ": " + scores[1].score)
    $("#hs3").text(scores[2].initials + ": " + scores[2].score)
    $("#hs4").text(scores[3].initials + ": " + scores[3].score)
    $("#hs5").text(scores[4].initials + ": " + scores[4].score)


    showHighScorePage();
};




function showHighScorePage() {
    $(".question-btn").hide();
    $(".question-text").hide();
    $("#start-button").hide();
    $(".game-over-page").hide();
    $(".border").hide();
    $(".result").hide();
    $(".high-score-page").show();
};

initialBtn.click(saveInitials);
highScoreBtn.click(showScores);