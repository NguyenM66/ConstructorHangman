// Recieve user input using inquirer or prompt 
// Use Word and Letter constructor functions
// Keep track of the user's remaining guesses
// Prompt if they would like to end the game if none remain


var Word = require("./word.js");
var inquirer = require("inquirer");

var wordArray = ["Great Wall", "Petra", "Colosseum", "Chichen Itza", "Machu Picchu", "Taj Mahal", "Christ the Redeemer"];
var array = [];

// Create word with with consturctor and storing it in newWord
function playHangman(){
	// Random word from array

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
	//generate random word to guess
	var guessWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	console.log("Word to guess:", guessWord);
	var userGuess = "";

	var newWord = new Word(guessWord);

	//if number of tries is 0 then game over
	if(tries == 0){
		console.log("GameOver!");
		playHangman();
		return;
	}

	//display hidden word
	newWord.convertToArray();

	//for each element in displayArray[i]

	for(var i = 0; i < newWord.displayArray.length; i++) {
		//set letter guessed to ctr
		//console.log("in loop");
		//var ctr = checkLetter(userGuess);
		var stringDisplay = "";
		if(newWord.displayArray[i].letter == " "){
			array.push(" ");
		}else{
			array.push(newWord.displayArray[i].display);
		}
		

		// array.forEach(function(element){
		// 	element = newWord.displayArray[i].display;
		// 	stringDisplay += newWord.displayArray[i].display;
		// })
		//console.log(newWord.displayArray[i].display + " ");
	}

	console.log("array", array);

	stringDisplay = array.toString().replace(/,/g,"");
	console.log(stringDisplay);

	inquirer
	.prompt([
		{
			type: "input",
			message: "Guess a letter!\n",
			name: "guess"
		}
		]).then(function(inquirerResponse) {
			var newLetter = new Letter(letter);
			console.log("user guess is: " + inquirerResponse.guess);
			userGuess = inquirerResponse.guess;
			newLetter.checkLetter(userGuess);
			//tries--;
			round(tries);
		})

}

// var stringDisplay=""
// var correctCount=0


// user guesses:
//   stringDisplay=""
//   for each element in newWord.displayArray[i]{
// 	let ctr = checkLetter(user guess);
// 	stringDisplay +=newWord.displayArray[i].display
//    }
// console.log stringDisplay

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


// main collects userguess;


// let turn = letter(displayArray, letterArray, guess){

// is guess in letterArray?
//    no? return 0
//    Yes? 
// 	was it already guessed?
// 		yes - return 1
// 		no - return display array updated
	

// }

// if turn = 0 evaluate turn as failed
// if turn = 1 display that it was already guessed
// else evaluate if the game is WON (displayArray == letterArray);
// if won playHangman();
// else update display and prompt for next turn



// word object
// 	-letter objects   newWord.displayArray[i].display
// 	-check letter method newWord.displayArray[i].checkLetter()









