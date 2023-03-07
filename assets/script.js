var timeLeft = document.getElementById("timeLeft");
var scoreKeeper = document.getElementById("score");

var inputName = document.getElementById("nameHS");
var gOS = document.getElementById("gameOverScreen");

var cow = document.getElementById("correctOrWrong");

var questionsArray = [];
var questionOne = [];
var questionTwo = [];
var questionThree = [];
var questionFour = [];

var highScoreArray = [];

var secondsLeft = 60;
var setNumber = 0;
var playerScore = 0;
var wrongAnswers = 0;

var game = false;


questionsArray = [
"What does CSS stand for?", 
"How to change the background color of an element?", 
"How to change the text color of an element?", 
"In how many ways can CSS be written in?", 
"<h1 style=\"color:blue;\">A Blue Heading\</h1>", 
"What type of CSS is generally recommended for designing large web pages?", 
"Which HTML tag is used to declare internal CSS?", 
"How can we select an element with a specific ID in CSS?", 
"How can we select an element with a specific class in CSS?", 
"How can we write comments in CSS"
];

questionOne = [
              /*1+1*/[answer = "Cascading Style Sheets", correct = true], 
              /*2+2*/[answer = "None are correct", correct = false], 
              /*3+3*/[answer = "color", correct = true], 
              /*4+4*/[answer = "1", correct = false],
              /*5+5*/[answer = "External", correct = false], 
              /*6+6*/[answer = "Inline", correct = false], 
              /*7+7*/[answer = "<link>", correct = false], 
              /*8+8*/[answer = ".", correct = false],
              /*9+9*/[answer = ".", correct = true], 
              /*10+10*/[answer = "#", correct = false]
             ]

questionTwo = [
              /*1+1*/[answer = "Coloured Special Sheets", correct = false], 
              /*2+2*/[answer = "Both background-color and color", correct = false], 
              /*3+3*/[answer = "None are correct", correct = false], 
              /*4+4*/[answer = "4", correct = false],
              /*5+5*/[answer = "Inline", correct = true], 
              /*6+6*/[answer = "Internal", correct = false], 
              /*7+7*/[answer = "<style>", correct = true], 
              /*8+8*/[answer = "^", correct = false],
              /*9+9*/[answer = "#", correct = false], 
              /*10+10*/[answer = "//", correct = false]
             ]

questionThree = [
              /*1+1*/[answer = "Color and Style Sheets", correct = false], 
              /*2+2*/[answer = "color", correct = false], 
              /*3+3*/[answer = "background-color", correct = false], 
              /*4+4*/[answer = "3", correct = true],
              /*5+5*/[answer = "None are correct", correct = false], 
              /*6+6*/[answer = "None are correct", correct = false], 
              /*7+7*/[answer = "<script>", correct = false], 
              /*8+8*/[answer = "#", correct = true],
              /*9+9*/[answer = "^", correct = false], 
              /*10+10*/[answer = "/* */", correct = true]
             ]

questionFour = [
              /*1+1*/[answer = "None are correct", correct = false], 
              /*2+2*/[answer = "background-color", correct = true], 
              /*3+3*/[answer = "Both background-color and color", correct = false], 
              /*4+4*/[answer = "2", correct = false],
              /*5+5*/[answer = "Internal", correct = false], 
              /*6+6*/[answer = "External", correct = true], 
              /*7+7*/[answer = "None are correct", correct = false], 
              /*8+8*/[answer = "None are correct", correct = false],
              /*9+9*/[answer = "None are correct", correct = false], 
              /*10+10*/[answer = "All are correct", correct = false]
             ]

console.log(questionOne[0][0]);



function setTime() {
var timerInterval = setInterval(function() {
  secondsLeft--;
  timeLeft.textContent = "00 : " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    console.log("seconds left :" + secondsLeft);
    questionsWrongFunction();
  }
}, 1000);
}

function questionsWrongFunction () {
 
 document.getElementById("questionContainer").textContent = "Questions Wrong :" +  wrongAnswers;
 document.getElementById("questionContainer").style.fontSize = " 40px";
 gOS.style.display = "block";

 document.getElementById("questionOneAnswer").style.display = "none";
 document.getElementById("questionTwoAnswer").style.display = "none";
 document.getElementById("questionThreeAnswer").style.display = "none";
 document.getElementById("questionFourAnswer").style.display = "none";
 console.log("question answer buttons display set to none");

 document.getElementById("questionOneText").style.display = "none";
 document.getElementById("questionTwoText").style.display = "none";
 document.getElementById("questionThreeText").style.display = "none";
 document.getElementById("questionFourText").style.display = "none";
 console.log("question text display set to none")
}

function clearAll() {
  localStorage.clear();
  console.log("Cleared Scores");
}

function reloadQuiz() {
  location.reload();
}

function highScoreDisplay () {

  document.getElementById("titleHighScores").style.display = "block";
  document.getElementById("highScoreOne").style.display = "block";
  document.getElementById("highScoreTwo").style.display = "block";
  document.getElementById("highScoreThree").style.display = "block";
  document.getElementById("highScoreFour").style.display = "block";
  document.getElementById("highScoreFive").style.display = "block";
  document.getElementById("highScoreSix").style.display = "block";
  document.getElementById("highScoreSeven").style.display = "block";
  document.getElementById("highScoreEight").style.display = "block";
  document.getElementById("highScoreNine").style.display = "block";
  document.getElementById("highScoreTen").style.display = "block";

  //temporary place holders till sort algo
  document.getElementById("highScoreOne").textContent = "Name :" + Object.keys(localStorage)[0] + " Score : " + localStorage.getItem(localStorage.key(0));
  document.getElementById("highScoreTwo").textContent = "Name :" + Object.keys(localStorage)[1] + " Score : " + localStorage.getItem(localStorage.key(1));
  document.getElementById("highScoreThree").textContent = "Name :" + Object.keys(localStorage)[2] + " Score : " + localStorage.getItem(localStorage.key(2));
  document.getElementById("highScoreFour").textContent = "Name :" + Object.keys(localStorage)[3] + " Score : " + localStorage.getItem(localStorage.key(3));
  document.getElementById("highScoreFive").textContent = "Name :" + Object.keys(localStorage)[4] + " Score : " + localStorage.getItem(localStorage.key(4));
  document.getElementById("highScoreSix").textContent = "Name :" + Object.keys(localStorage)[5] + " Score : " + localStorage.getItem(localStorage.key(5));
  document.getElementById("highScoreSeven").textContent = "Name :" + Object.keys(localStorage)[6] + " Score : " + localStorage.getItem(localStorage.key(6));
  document.getElementById("highScoreEight").textContent = "Name :" + Object.keys(localStorage)[7] + " Score : " + localStorage.getItem(localStorage.key(7));
  document.getElementById("highScoreNine").textContent = "Name :" + Object.keys(localStorage)[8] + " Score : " + localStorage.getItem(localStorage.key(8));
  document.getElementById("highScoreTen").textContent = "Name :" + Object.keys(localStorage)[9] + " Score : " + localStorage.getItem(localStorage.key(9));

  document.getElementById("viewHighScore").style.display = "none";
  document.getElementById("viewHighScoreDisable").style.display = "block";

  document.getElementById("questionContainer").textContent = "";
  gOS.style.display = "none";

}

function highScoreDisplayDisable () {

  document.getElementById("titleHighScores").style.display = "none";
  document.getElementById("highScoreOne").style.display = "none";
  document.getElementById("highScoreTwo").style.display = "none";
  document.getElementById("highScoreThree").style.display = "none";
  document.getElementById("highScoreFour").style.display = "none";
  document.getElementById("highScoreFive").style.display = "none";
  document.getElementById("highScoreSix").style.display = "none";
  document.getElementById("highScoreSeven").style.display = "none";
  document.getElementById("highScoreEight").style.display = "none";
  document.getElementById("highScoreNine").style.display = "none";
  document.getElementById("highScoreTen").style.display = "none";

  document.getElementById("viewHighScore").style.display = "block";
  document.getElementById("viewHighScoreDisable").style.display = "none";

  document.getElementById("questionContainer").textContent = questionsArray[setNumber];
  gOS.style.display = "none";

}

function gameOver() {

  highScoreArray = [inputName.value, playerScore];
  console.log("game over screen")
  localStorage.setItem(inputName.value, playerScore);

  console.log("name set is :" + Object.keys(localStorage)[1] + " Player Score :" + localStorage.getItem(localStorage.key(1)));

  console.log("length of local storage :" + localStorage.length);

  document.getElementById("titleHighScores").style.display = "block";
  document.getElementById("highScoreOne").style.display = "block";
  document.getElementById("highScoreTwo").style.display = "block";
  document.getElementById("highScoreThree").style.display = "block";
  document.getElementById("highScoreFour").style.display = "block";
  document.getElementById("highScoreFive").style.display = "block";
  document.getElementById("highScoreSix").style.display = "block";
  document.getElementById("highScoreSeven").style.display = "block";
  document.getElementById("highScoreEight").style.display = "block";
  document.getElementById("highScoreNine").style.display = "block";
  document.getElementById("highScoreTen").style.display = "block";
  document.getElementById("restartButton").style.display = "block";


  document.getElementById("highScoreOne").textContent = "Name :" + Object.keys(localStorage)[0] + " Score : " + localStorage.getItem(localStorage.key(0));
  document.getElementById("highScoreTwo").textContent = "Name :" + Object.keys(localStorage)[1] + " Score : " + localStorage.getItem(localStorage.key(1));
  document.getElementById("highScoreThree").textContent = "Name :" + Object.keys(localStorage)[2] + " Score : " + localStorage.getItem(localStorage.key(2));
  document.getElementById("highScoreFour").textContent = "Name :" + Object.keys(localStorage)[3] + " Score : " + localStorage.getItem(localStorage.key(3));
  document.getElementById("highScoreFive").textContent = "Name :" + Object.keys(localStorage)[4] + " Score : " + localStorage.getItem(localStorage.key(4));
  document.getElementById("highScoreSix").textContent = "Name :" + Object.keys(localStorage)[5] + " Score : " + localStorage.getItem(localStorage.key(5));
  document.getElementById("highScoreSeven").textContent = "Name :" + Object.keys(localStorage)[6] + " Score : " + localStorage.getItem(localStorage.key(6));
  document.getElementById("highScoreEight").textContent = "Name :" + Object.keys(localStorage)[7] + " Score : " + localStorage.getItem(localStorage.key(7));
  document.getElementById("highScoreNine").textContent = "Name :" + Object.keys(localStorage)[8] + " Score : " + localStorage.getItem(localStorage.key(8));
  document.getElementById("highScoreTen").textContent = "Name :" + Object.keys(localStorage)[9] + " Score : " + localStorage.getItem(localStorage.key(9));


  document.getElementById("questionContainer").textContent = "";
  gOS.style.display = "none";
}

for (let x = 0; x < questionsArray.length; x++){
if (questionOne[x].includes(false)) {
 console.log(questionsArray[x] + " :" + questionOne[x] +": contains false");
} else {
 console.log(questionsArray[x] + " :" + questionOne[x] +": contains true");
}
}

function startQuizNow() {
 setNumber = 0;
 playerScore = 0;
 wrongAnswers = 0;
 secondsLeft = 60;
 document.getElementById("startButton").style.display = "none";
 document.getElementById("textDescription").style.display = "none";
 console.log("start info and start button display is set to none")

 document.getElementById("questionContainer").style.display = "block";
 console.log("questionContainer display set to flex");

 document.getElementById("questionOneAnswer").style.display = "block";
 document.getElementById("questionTwoAnswer").style.display = "block";
 document.getElementById("questionThreeAnswer").style.display = "block";
 document.getElementById("questionFourAnswer").style.display = "block";
 console.log("question answer buttons display set to flex");

 document.getElementById("questionOneText").style.display = "block";
 document.getElementById("questionTwoText").style.display = "block";
 document.getElementById("questionThreeText").style.display = "block";
 document.getElementById("questionFourText").style.display = "block";
 console.log("question text display let to block")
 
  document.getElementById("titleHighScores").style.display = "none";
  document.getElementById("highScoreOne").style.display = "none";
  document.getElementById("highScoreTwo").style.display = "none";
  document.getElementById("highScoreThree").style.display = "none";
  document.getElementById("highScoreFour").style.display = "none";
  document.getElementById("highScoreFive").style.display = "none";
  document.getElementById("highScoreSix").style.display = "none";
  document.getElementById("highScoreSeven").style.display = "none";
  document.getElementById("highScoreEight").style.display = "none";
  document.getElementById("highScoreNine").style.display = "none";
  document.getElementById("highScoreTen").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
 setTime();

cow.style.display = "block";
 console.log("game is set to :" + game);

nextQuestion();
};

function nextQuestion() {
if(setNumber == 10) {
  scoreKeeper.textContent = "Score :" + playerScore;
  document.getElementById("questionContainer").textContent = "Questions Wrong :" + wrongAnswers;
  document.getElementById("questionContainer").style.fontSize = " 40px";
  gOS.style.display = "block";

 document.getElementById("questionOneAnswer").style.display = "none";
 document.getElementById("questionTwoAnswer").style.display = "none";
 document.getElementById("questionThreeAnswer").style.display = "none";
 document.getElementById("questionFourAnswer").style.display = "none";
 console.log("question answer buttons display set to none");

 document.getElementById("questionOneText").style.display = "none";
 document.getElementById("questionTwoText").style.display = "none";
 document.getElementById("questionThreeText").style.display = "none";
 document.getElementById("questionFourText").style.display = "none";
 console.log("question text display set to none")

  document.getElementById("viewHighScore").style.display = "none";
  document.getElementById("viewHighScoreDisable").style.display = "none";
  cow.style.display = "none";
  timeLeft.style.display = "none";

  } else {
  document.getElementById("questionContainer").textContent = questionsArray[setNumber];
  console.log("question :" + questionsArray[setNumber])
  console.log("trigger test")

  document.getElementById("questionOneText").textContent = questionOne[setNumber][0];
  document.getElementById("questionTwoText").textContent = questionTwo[setNumber][0];
  document.getElementById("questionThreeText").textContent = questionThree[setNumber][0];
  document.getElementById("questionFourText").textContent = questionFour[setNumber][0];
  }
}

  function buttonOne() {
   console.log("buttonOne has been clicked");
   if (questionOne[setNumber][1] == true) {
    playerScore++;
    setNumber++;
    scoreKeeper.textContent = "Score : " + playerScore;
    cow.textContent = "Correct";
   } else {
    setNumber++;
    wrongAnswers++;
    scoreKeeper.textContent = "Score : " + playerScore;
    cow.textContent = "Wrong";
   }
    console.log("player score is :" + playerScore)
    nextQuestion();
  }
  function buttonTwo() {
   console.log("buttonTwo has been clicked");
    if (questionTwo[setNumber][1] == true) {
    playerScore++;
    setNumber++;
    scoreKeeper.textContent = "Score : " + playerScore;
    cow.textContent = "Correct";
   } else {
    setNumber++;
    wrongAnswers++;
    scoreKeeper.textContent = "Score : " + playerScore;
    cow.textContent = "Wrong";
   }
    console.log("player score is :" + playerScore)
    nextQuestion();
  }
  function buttonThree() {
   console.log("buttonThree has been clicked");
    if (questionThree[setNumber][1] == true) {
    playerScore++;
    setNumber++;
    scoreKeeper.textContent = "Score : " + playerScore;
    cow.textContent = "Correct";
   } else {
    setNumber++;
    wrongAnswers++;
    scoreKeeper.textContent = "Score : " + playerScore;
    cow.textContent = "Wrong";
   }
    console.log("player score is :" + playerScore)
    nextQuestion();
  }
    function buttonFour() {
   console.log("buttonFour has been clicked");
    if (questionFour[setNumber][1] == true) {
    playerScore++;
    setNumber++;
    scoreKeeper.textContent = "Score : " + playerScore;
    cow.textContent = "Correct";
   } else {
    setNumber++;
    wrongAnswers++;
    scoreKeeper.textContent = "Score : " + playerScore;
    cow.textContent = "Wrong";
   }
    console.log("player score is :" + playerScore)
    nextQuestion();
  }