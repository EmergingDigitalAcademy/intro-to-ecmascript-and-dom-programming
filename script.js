const onSubmit = (event) => {
   event.preventDefault();

   alert('Hello World!');

   // const rawGuess = document.getElementById('guess-input').value;
   // const currentGuess = Number(rawGuess);


   // document.getElementById('guess-input').value = '';
}

// When the form is submitted, an event of the type 'submit' is emitted
// We can capture this event by adding a listener, and asking the browser
// to call our onSubmit function when the 'submit' event is detected
document.getElementById('game-form').addEventListener('submit', onSubmit);