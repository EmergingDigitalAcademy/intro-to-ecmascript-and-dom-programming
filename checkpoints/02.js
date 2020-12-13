/*
   Milestone 2: 
      - Generate a random number and store it in a global variable
      - Convert the guess into a number and compare it against the global variable
      - Put the result on the DOM (using innerText property of the results p tag)
*/

const onSubmit = (event) => {
   event.preventDefault();

   const rawGuess = document.getElementById('guess-input').value;

   // convert our guess from a string to a Number type so we can compare with < and >
   const currentGuess = Number(rawGuess);
   
   // Create a placeholder for our message to the user
   let result = '';
   // See if the guess is greater than the correct number. if-statements
   // will only run the code block {} if the evaluation in the parens ()
   // is 'truthy', otherwise it continues to the next check. only one code-block
   // in every if-statement will ever run by design.
   if (currentGuess > correctNumber) { 
      // use string templates to craft a friendly message to the user, store
      // it in our placeholder string. Backticks create string templates, allowing
      // us to use ${} syntax to insert javascript variables into the string
      result = `Your guess was ${currentGuess}, and it is too high!`;
   } else if (currentGuess < correctNumber) {
      // their guess was too low
      result = `Your guess was ${currentGuess}, and it is too low!`;
   } else { 
      // neither too low nor too high, so it has to be correct (assuming that
      // we're always comparing numbers)
      result = `Your guess was ${currentGuess}, and it is correct!`;
   }

   // Put the result on the DOM! innerText updates the text value between
   // the opening tag and the closing tag: <p>This is InnerText</p>
   alert(result); // for debugging only!
   document.getElementById('result').innerText = result;

   document.getElementById('guess-input').value = '';
}

document.getElementById('game-form').addEventListener('submit', onSubmit);

// Start the game. Math.random() generates a number between 0 and 1.
// Multiply this times the max number plus one, then either convert
// directly to an integer by dropping the fractional part (parseInt)
// or use Math.floor to achieve the same result. We add one to the
// number because Math.random() will never return a perfect 1.0, so 
// the max number will never be generated, only up to it.
const correctNumber = Math.floor(Math.random() * 101);
console.log(`debug: correct number is ${correctNumber}`);
