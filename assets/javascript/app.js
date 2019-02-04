$(document).ready(function () {


    $("body").on("click", "#start", function (event) {
        event.preventDefault();
        generateHTML();
        countdown();
    });

    $("body").on("click", ".answer", function (event) {

        chosenAnswer = $(this).text();
        if (chosenAnswer === correctAnswers[questionCounter]) {
            clearInterval(timer);
            generateWin();
        }
        else {
            clearInterval(timer);
            generateLoss();

        }
    });
    console.log(correctAnswers)
    console.log(questionCounter)
    console.log(chosenAnswer)
    $("body").on("click", "#reset", function (event) {

        resetGame();
    });

});

function generateHTML() {
    game = " <p class = 'text-center timer-p'>Time Remaining: <span class='timeLeft'></span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class = 'first-answer answer'>A." + answerArray[questionCounter][0] + "</p><p class = 'second-answer answer'>B." + answerArray[questionCounter][1] + "</p><p class = 'third-answer answer'>C." + answerArray[questionCounter][2] + "</p><p class = 'forth-answer answer'>D." + answerArray[questionCounter][3] + "</p>";
    $("#gameArea").html(game);
}

function generateWin() {
    correctCounter++;
    game = " <p class = 'text-center timer-p'>Time Remaining: <span class='timeLeft'>" + counter + "</span></p>" + "<p class='text-center'>You made a Wise Decision! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $("#gameArea").html(game);
    setTimeout(hold, 7000);
}

function generateLoss() {
    incorrectCounter++;
    game = " <p class = 'text-center timer-p'>Time Remaining: <span class='timeLeft'>" + counter + "</span></p>" + "<p class='text-center'>You made a Foolish Decision! The Correct answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $("#gameArea").html(game);
    setTimeout(hold, 7000);
}

function generateOutofTimeLoss() {
    unansweredCounter++;
    game = " <p class = 'text-center timer-p'>Time Remaining: <span class='timeLeft'>" + counter + "</span></p>" + "<p class='text-center'>You took tooo damn LONG!!!!!!!!! The Correct answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $("#gameArea").html(game);
    setTimeout(hold, 7000);
}

function scoreCard() {
    game = " <p class = 'text-center timer-p'>Time Remaining: <span class='timeLeft'>" + counter + "</span></p>" + "<p class='text-center'>All good things must come to an end. Was your comicbook wisdom worthy?" + "</p>" + "<p class = 'endgameSummary'> Correct Answers: " + correctCounter + "</p>" + "<p class='incorrect'>Incorrect Answers: " + incorrectCounter + "</p>" + "<p class ='unAnswered'>Unanswered: " + unansweredCounter + "</p>";
    $("#gameArea").html(game);
}

function hold() {
    console.log(questionCounter)
    if (questionCounter < 5) {
        questionCounter++;
        generateHTML();
        counter = 30;
        countdown();
    }else{
        scoreCard();

    }
}

function countdown() {

    timer = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(timer);
            generateOutofTimeLoss();
        }
        if (counter > 0) {
            counter--;
        }
        $('.timeLeft').html(counter);
    }
}


function resetGame() {

    counter = 30;

    questionCounter = 0;

    correctCounter = 0;

    incorrectCounter = 0;

    unansweredCounter = 0;

    generateHTML();

    countdown();
}



var counter = 30;

var questionCounter = 0;

var correctCounter = 0;

var incorrectCounter = 0;

var unansweredCounter = 0;

var questionArray = ["What is Superman's alter ego?", "What is Batman's alter ego?", "Who is Batman's arch nemesis?", "Who's the Joker's twisted love?", "Who played the joker in The Dark Knight?", "Mark HamilL did the voice acting for which character?"];

var answerArray = [["Dick Grayson", "Walter White", "Bruce Wayne", "Clark Kent"], ["Clark Kent", "Bruce Wayne", "Alfred Pennyworth", "Arthur Fleck"], ["Superman", "Lex Luthor", "The Joker", "Bizarro"], ["Lois Lane", "Selina Kyle", "Harley Quinn", "Lana Lang"], ["Jack Nicholson", "Heath Ledger", "Jared Leto", "Joaquin Phoenix"], ["The Joker", "Batman", "The Riddler", "Robin"]];

var imageArray = ["<img class='center-block img-right' src='./assets/images/Clark Kent.jpg'>", "<img class='center-block img-right' src='./assets/images/Bruce Wayne.jpg'>", "<img class='center-block img-right' src='./assets/images/The Joker.jpg'>", "<img class='center-block img-right' src='./assets/images/Harley Quinn.jpg'>", "<img class='center-block img-right' src='./assets/images/Heath Ledger joker.jpg'>", "<img class='center-block img-right' src='./assets/images/Mark Hamill.jpg'>"];

var correctAnswers = ["D.Clark Kent", "B.Bruce Wayne", "C.The Joker", "C.Harley Quinn", "B.Heath Ledger", "A.The Joker"];

var chosenAnswer;

var timer;

var game;
