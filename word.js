// Creat Object representing the current word the user is attempting to guess.
// Word specific logic and data
//var Letter = require("./letter.js");

var Word = function(word) {
	//console.log("In word:", word);
	// word to guess
	this.word = word;
	this.letterArray = [];
	this.displayArray = [];
	this.displayStr = "";
	this.convertToArray = function(word) {
		// Convert word to array of letters
		this.letterArray = this.word.split(/(?!$)/);
		//console.log(this.letterArray);
		for(var i = 0; i <  this.letterArray.length; i++) {
			if(this.letterArray[i] == " "){
				this.displayArray.push(" ");
			}else{
				this.displayArray.push("_ ");
			}
	 		//console.log(this.displayArray);
	 	}
		console.log(this.displayArray);
		this.displayStr = this.displayArray.toString().replace(/,/g,"");
		console.log(this.displayStr);
		return(this.displayArray);

		//when user guesses correct letter update display string
		//replace that guessed letter with a "*"

		//if guesses wrong "incorrect" and decrement guesses

		// var checkLetters = new Letter(this.displayArray);
		// checkLetters.checkWord(this.letterArray);
	};


	// this.updateArray = function(guess, currentArray) {
	// 	var test = this.displayArray.indexOf(guess);
	// 	if(test < 0){
	// 		return(0);
	// 	}
	// }
	

};

module.exports = Word;

