// arrow functions! an arrow function is technically an anonymous function
// that gets assigned into a javascript variable. Structure looks like this:
// v--- functions can be stored in javascript variables so we can call them later by name
//                  v-- arguments are listed in the parenthesis. 
//                       v-- "fat arrow" syntax is how we create "arrow" functions
//                           v---- curly braces start the code block
const onSubmit = (event) => {
   // the `event` argument is a famous pattern in browser programming. Every
   // 'browser event' creates an object that has a ton of information in it,
   // like what element dispatched the event (button, input, etc), the
   // timestamp of the event creation, and more. The browser gives it to us
   // for free, as long as we ask for it as the first argument of the function

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
   // less-than and greater-than return a Boolean value, true or false. 
   // The 'if' statement will run the code block that follows the first
   // comparison that returns 'true'. If none return true, then the 'else'
   // will run instead. If there is no 'else', the program continues without
   // running any of the code blocks in the if-statement.
   if (currentGuess > correctNumber) { // too high
      // backticks are used to create 'string templates', meaning we can
      // use ${} syntax to run javascript expressions. We use it here
      // to insert the content of our `currentGuess` variable
      result = `Your guess was ${currentGuess}, and it is too high!`;
   } else if (currentGuess < correctNumber) { // too low
      result = `Your guess was ${currentGuess}, and it is too low!`;
   } else { // nailed it!
      // Add a 'winner' class to the <body> tag which we can use
      // CSS and css transitions to make the page pop!
      document.getElementById('game-body').classList.add('winner');

      // Initialize an Audio object and play it!
      // Party horn from: http://soundbible.com/1817-Party-Horn.html
      const audio = new Audio('./party_horn.mp3');
      audio.play();
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

// When the form is submitted, an event of the type 'submit' is emitted
// We can capture this event by adding a listener, and asking the browser
// to call our onSubmit function when the 'submit' event is detected
document.getElementById('game-form').addEventListener('submit', onSubmit);

// Start the game. Math.random()*X will be from 0 to X, non-inclusive
const correctNumber = parseInt(Math.random() * 101);
const guesses = [];
console.log(`debug: correct number is ${correctNumber}`);
