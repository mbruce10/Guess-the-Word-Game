// Global Variables

const guessedLetters = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

const letterSymbol = function (word) {
    const wordLetters = [];
    for (const letter of word) {
        console.log(letter);
        wordLetters.push("●");
    }
    wordInProgress.innerText = wordLetters.join("");
};

letterSymbol(word);

button.addEventListener("click", function (e) {
    e.preventDefault();
    const guessInput = letterInput.value
    console.log(guessInput);
    letterInput.value = "";
});