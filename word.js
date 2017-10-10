// Creat Object representing the current word the user is attempting to guess.
// Word specific logic and data

var Word = function(word) {
	console.log("In word:", word);
	// word to guess
	this.word = word;
	this.letterArray = [];
	this.convertToArray = function(word) {
		// Convert word to array of letters
		this.letterArray = this.word.split(" ");
		console.log(this.letterArray);

		// Split " "
	};
	
	// this.testLetter = function() {
	// this.letterArray.
	// 	//pass array to Letter
	// };

};

module.exports = Word;

