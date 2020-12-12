const onSubmit = (event) => {
   // Using form submit gives us the advantage of being able to submit
   // by pressing 'enter' and html5 validation, but by default the 
   // page will refresh due to legacy reasons. We can prevent this
   // by capturing the DOM event and calling preventDefault()
   event.preventDefault();

   // Grab the value from the input box by using the document API. We
   // use the ID of the element which should be unique across all
   // DOM elements. The .value will be whatever was typed into the box.
   const rawGuess = document.getElementById('guess-input').value;
   // Convert the input from a string (default) to a Number, so that
   // we can do math comparisons like greater-than and less-than
   const currentGuess = Number(rawGuess);
   
   // Check the result! Make an empty string and update it to whatever
   // we will want to display to the user.
   let result = '';
   if (currentGuess > correctNumber) { // too high
      result = `Your guess was ${currentGuess}, and it is too high!`;
   } else if (currentGuess < correctNumber) { // too low
      result = `Your guess was ${currentGuess}, and it is too low!`;
   } else { // nailed it!
      // Add a 'winner' class to the body element that we can make pretty
      // using CSS
      document.getElementById('game-body').classList.add('winner');
      result = `Your guess was ${currentGuess}, and it is correct!`;
   }

   // push the result message to the global guess history array
   guesses.push(result);

   // show the user their most recent guess result by updating the 
   // inner text of the p tag with the id #result
   document.getElementById('result').innerText = result;

   // Clear the guess history so we start fresh every time
   document.getElementById('guess-history').innerHTML = '';

   // Loop over each guess in the history using .forEach, which
   // expects to be given a function to call for each item in the
   // array. Each respective item will be copied into the first
   // parameter of the function, which we are calling guessItem
   guesses.forEach((guessItem) => {
      // create a new <li> element, and set its inner text to the guess result 
      let li = document.createElement('li');
      li.innerText = guessItem;

      // Append the guess node to the document, inside the <ul>
      document.getElementById('guess-history').appendChild(li);
   })

   // clear the guess input
   document.getElementById('guess-input').value = '';
}

// When the form is submitted, call our onSubmit function
document.getElementById('game-form').addEventListener('submit', onSubmit);

// Start the game. Math.random()*X will be from 0 to X, non-inclusive
const correctNumber = parseInt(Math.random() * 101);
const guesses = [];
console.log(`debug: correct number is ${correctNumber}`);
