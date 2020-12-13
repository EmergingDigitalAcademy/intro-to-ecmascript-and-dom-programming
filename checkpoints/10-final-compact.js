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
      document.getElementById('game-body').classList.add('winner');
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
