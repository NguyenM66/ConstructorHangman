// Recieve user input using inquirer or prompt 
// Use Word and Letter constructor functions
// Keep track of the user's remaining guesses
// Prompt if they would like to end the game if none remain


var Word = require("./word.js");
var inquirer = require("inquirer");

var wordArray = ["Great Wall", "Petra", "Colosseum", "Chichen Itza", "Machu Picchu", "Taj Mahal", "Christ the Redeemer"];
// Random word from array
var guessWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log("Word to guess:", guessWord);

// Create word with with consturctor and storing it in newWord
var newWord = new Word(guessWord);

newWord.convertToArray();
// take user input letter and test
// test while letter is >= 0 (in array)
// replace "_" with guessed letter
// and remove letter from array

// if array lenth == 0 
// then increment wins
// if guesses == 0 
// then increment loss