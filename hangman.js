// Recieve user input using inquirer or prompt 
// Use Word and Letter constructor functions
// Keep track of the user's remaining guesses
// Prompt if they would like to end the game if none remain


Word = require("./word.js");
var inquirer = require("inquirer");

var wordArray = ["Great Wall", "Petra", "Colosseum", "Chichen Itza", "Machu Picchu", "Taj Mahal", "Christ the Redeemer"];
// Random word from array
var guessWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log("Word to guess:", guessWord);
var userGuess = "";

var newWord = new Word(guessWord, userGuess);

// Create word with with consturctor and storing it in newWord
function playHangman(){
	inquirer
	.prompt([
		{
			type: "list",
			message: "Would you like to play The 7 Wonders of the World hangman?\n",
			choices:["Yes", "No"],
			name: "play"
		}
		]).then(function(inquirerResponse) {
			console.log("user said: " + inquirerResponse.play);
			userSaid = inquirerResponse.play;
			if(userSaid == "Yes"){
				round(2);
			}else if(userSaid == "No"){
				process.exit();
			}
		})
}

function round(tries){
	if(tries == 0){
		console.log("GameOver!");
		playHangman();
	}

	//display hidden word
	newWord.convertToArray();

	inquirer
	.prompt([
		{
			type: "input",
			message: "Guess a letter!\n",
			name: "guess"
		}
		]).then(function(inquirerResponse) {

			console.log("user guess is: " + inquirerResponse.guess);
			userGuess = inquirerResponse.guess;
			//tries--;
			//round(tries);
		})
}

playHangman();
// newWord.convertToArray();
// take user input letter and test
// test while letter is >= 0 (in array)
// replace "_" with guessed letter
// and remove letter from array

// if array lenth == 0 
// then increment wins
// if guesses == 0 
// then increment loss