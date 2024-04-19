// Global Variables

const guessedLettersElement = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// Display symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

button.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message element
    message.innerText = "";

    // Grab what was entered in the input
    const guessInput = letterInput.value
  
   //check format of input
    const correctGuess = validateLetter(guessInput);

    if (correctGuess) {
        //If guess is valid, then add guess to list
        makeGuess(guessInput); 
    };

    letterInput.value = "";

});

const validateLetter = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        //Input is empty
        message.innerText = "Guess a letter.";
    } else if (input.length > 1) {
        //Input is more than 1 letter
        message.innerText = "Enter 1 letter only."
    } else if (!input.match(acceptedLetter)) {
        //Input is a non-letter
        message.innerText = "Enter a LETTER!"
    } else {
        //Input is correct format
        return input;
    }
};

const makeGuess = function (guessInput) {
    guessInput = guessInput.toUpperCase();
    if (guessedLetters.includes(guessInput)) {
        message.innerText = "No repeats! You already guessed that!"
    } else {
        guessedLetters.push(guessInput);
        console.log(guessedLetters);
    }
};
