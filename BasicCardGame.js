//required files and NPM
var inquirer = require("inquirer");
var questions = require("./basicQuestions.json");


//create flash Card constructor
function BasicCard (front, back) {
	this.front = front;
	this.back = back;

}

//variables to keep track of right and wrong answers
var answersRight = 0;
var answersWrong = 0;

// create flash cards

var flashCardArray = [];

//for basic functionality
for (var i=0; i < questions.length;i++) {
	var flashCard = new BasicCard(questions[i].front, questions[i].back);

	flashCardArray.push(flashCard);

}


count = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < flashCardArray.length) {
    debugger;
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: questions[count].front
      }, 
    ]).then(function(answers) {

      if (answers.name.toLowerCase() === flashCardArray[count].back.toLowerCase()) {
      	answersRight ++;
      	console.log("Correct Answer");

      } else {
      	answersWrong ++;
      	console.log("Incorrect Answer. The correct Answer is " + flashCardArray[count].back);
      }

      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
  	console.log("\n\r======================================\n\r");
  	console.log("HERE ARE YOUR RESULTS \n\r");
    console.log("Correct Answers: " + answersRight);
    console.log("Incorrect Answers: " + answersWrong +"\n\r");
  }
};

// call askquestion to run our code
askQuestion();




