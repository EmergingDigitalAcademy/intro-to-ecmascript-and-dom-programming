/*
   Step 1: Make an arrow function that:
      - Is set to run when the form is submitted via addEventListener
      - Accepts the event object from the browser
      - Prevents the form from reloading the page
      - Pulls the value of the guess input from the DOM
      - Proves we have the value by popping up an alert
      - Clears the guess input box by resetting the value to an empty string
*/

// An arrow function called onSubmit that takes a single argument: 'event'
const onSubmit = (event) => {
   event.preventDefault(); // stop the form from submitting

   // grab the text value from the document API using the unique ID of the input
   const rawGuess = document.getElementById('guess-input').value;

   // alert the user (popup) to prove we grabbed the guess correctly
   alert(rawGuess);

   // Reset the value of the guess-input element to an empty string
   document.getElementById('guess-input').value = '';
}

// Add an event listener such that when the form is submitted, call our function
document.getElementById('game-form').addEventListener('submit', onSubmit);