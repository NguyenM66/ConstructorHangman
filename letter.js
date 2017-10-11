// Used for each letter in the current workd.
// Each letter object should display the character or a placeholder
// Letter specific logic and data

var inquirer = require("inquirer");


var Letter = function(wordArray, userGuess) {
	// this.guessLetter = function(userGuess){
	// 	inquirer
	// 		.prompt([
	// 			{
	// 				type: "input",
	// 				message: "Guess a letter!",
	// 				name: "guess"
	// 			}
	// 			]).then(function(inquirerResponse) {
	// 				console.log("user guess is: " + inquirerResponse.guess);
	// 			})
	// }
	this.checkWord = function(wordArray, userGuess) {
		// this.wordArrayTest = this.wordArray.indexOf(userGuess);
		// this.displayArrayTest = this.displayArray.indexOf(userGuess);
		// this.badletterTest = this.badletter.indexOf(userGuess);
		//check letters
		console.log("In letter:", wordArray);
		
		while(guess > -1){
			var x = guess;

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
				})
				
			wordArray[x] = guessedArray[x];
			guessedArray[x] = "*";
			guess = guessedArray.indexOf(userGuess);
		}
		this.guessLetter(userGuess);
		this.displayArray.push(new Letter(displayArray));
	}
	
	// For Each letter in array 
	// Convert word to "_"


};

module.exports = Letter;