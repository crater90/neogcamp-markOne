var readlineSync = require("readline-sync");

var score = 0;

var questions = [{
  question: "what's my full name ?",
  answer: "Mohd Kamran"
},{
  question: "Where do I live? ",
  answer: "Lucknow"
}, {
  question: "My favorite superhero would be? ",
  answer: "Iron Man"
},
{
  question: "Where am i studying? ",
  answer: "Galgotias University"
},
{
  question: "what i am studying ?",
  answer: "Computer Science"
}];

var highScores = [
  {
    name: "kamran",
    score: 5,
  },
  {
    name: "Tanay",
    score: 4,
  },
]

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to Know me better Quiz");
  console.log("-------------")
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }
  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();

// console.log("kamran")