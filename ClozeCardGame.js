//required files and NPM
var inquirer = require("inquirer");
var questions = require("./clozeQuestions.json");


function ClozeCard (fullText, partialText) {
	this.fullText = fullText;
	this.partialText = partialText;
  this.clozeQuestion = this.fullText.replace(this.partialText, "...");

}

//variables to keep track of right and wrong answers
var answersRight = 0;
var answersWrong = 0;

// create flash cards

var flashCardArray = [];

//for basic functionality
for (var i=0; i < questions.length;i++) {

	var flashCard = new ClozeCard(questions[i].question, questions[i].cloze);

	flashCardArray.push(flashCard);

}

//console.log(flashCardArray);


count = 0;

var askQuestion = function() {
  if (count < flashCardArray.length) {
    debugger;

    inquirer.prompt([
      {
        name: "name",
        message: flashCardArray[count].clozeQuestion
      }, 

    ]).then(function(answers) {
      //console.log(answers);
      //console.log(flashCardArray[count]);

      if (answers.name.toLowerCase() === flashCardArray[count].partialText.toLowerCase()) {
      	answersRight ++;
      	console.log("Correct Answer");

      } else {
      	answersWrong ++;
      	console.log("Incorrect Answer. The correct Answer is " + flashCardArray[count].partialText);
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




