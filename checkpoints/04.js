/*
   Milestone 4: 
      - When the players wins, tag the <body> with a special class so 
         we can celebrate with CSS!
      - Play a sound clip of a little party horn :) 
*/
const onSubmit = (event) => {
   event.preventDefault();

   const rawGuess = document.getElementById('guess-input').value;
   const currentGuess = Number(rawGuess);
   
   let result = '';
   if (currentGuess > correctNumber) { 
      result = `Your guess was ${currentGuess}, and it is too high!`;
   } else if (currentGuess < correctNumber) {
      result = `Your guess was ${currentGuess}, and it is too low!`;
   } else { 
      // Add a 'winner' class to the <body> tag which we can use
      // CSS and css transitions to make the page pop!
      document.getElementById('game-body').classList.add('winner');

      // Initialize an Audio object and play it!
      // Party horn from: http://soundbible.com/1817-Party-Horn.html
      const audio = new Audio('./party_horn.mp3');
      audio.play();

      result = `Your guess was ${currentGuess}, and it is correct!`;
   }
   guesses.push(result);

   document.getElementById('result').innerText = result;

   document.getElementById('guess-history').innerHTML = '';

   guesses.forEach((guessItem) => {
      let li = document.createElement('li');
      li.innerText = guessItem;

      document.getElementById('guess-history').appendChild(li);
   })

   document.getElementById('guess-input').value = '';
}

document.getElementById('game-form').addEventListener('submit', onSubmit);

const correctNumber = parseInt(Math.random() * 101);
const guesses = [];
console.log(`debug: correct number is ${correctNumber}`);
