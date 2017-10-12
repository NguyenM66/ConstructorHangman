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
			this.displayArray[i] = new Letter(this.letterArray[i]);
			// if(this.letterArray[i] == " "){
			// 	this.displayArray.push(" ");
			// }else{
			// 	this.displayArray.push("_ ");
			// }
	 		//console.log(this.displayArray);
	 	}
	this.getLetter = function(i){
		return this.letterArray[i];
	}
		//console.log("array of objects", this.displayArray);
		// this.displayStr = this.displayArray.toString().replace(/,/g,"");
		// console.log(this.displayStr);
	};


	// this.updateArray = function(guess, currentArray) {
	// 	var test = this.displayArray.indexOf(guess);
	// 	if(test < 0){
	// 		return(0);
	// 	}
	// }
	

};

var Letter = function(letter) {
	this.display = "_ ";
	this.letter = letter;
	this.checkLetter = function(guess){
		console.log("in checkLetter");
		if(guess == this.letter){
			this.display = letter + " ";
		
		}
	}

}

module.exports = {
	Word: Word,
	Letter: Letter
}

