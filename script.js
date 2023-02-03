/* first player to reach 100 points wins 
if the dice rolls 1, it resets current player to 0 and switches player
if player holds, we verify if the score is 100 if not, we switch the player and memorize the score
if the user resets the game all the scores set to 0 and player one starts rolling the dice */

'use strict';

//  selecting elements#
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const playerName0 = document.getElementById('name--0');
const playerName1 = document.getElementById('name--1');
const newGame = document.querySelector('.btn--new')

let scores, currentScore, playing, activePlayer;

//Reutilizable functions 
const gameReset = function(){
  scores = [0,0]
  currentScore = 0;
  playing = true;
  playerName0.textContent = `Player 1`;
  playerName1.textContent = `Player 2`;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  activePlayer = 0;
  player0.classList.remove(`player--winner`);
  player1.classList.remove(`player--winner`);
  document.querySelector(`.player--0`).classList.add(`player--active`)
  document.querySelector(`.player--1`).classList.remove(`player--active`)
  diceEl.classList.add('hidden')

}
// Switch Player function
const switchPlayer = function() {document.getElementById(`current--${activePlayer}`).textContent =
currentScore = 0
currentScore;
activePlayer = activePlayer === 0 ? 1 : 0;
player0.classList.toggle('player--active')
player1.classList.toggle('player--active')
}
// Start and restart game function


// Starting conditions
gameReset()

// Rolling the dice function

rollBtn.addEventListener('click', function () {
  // Generate random dice roll
  if(playing){
  const dice = Math.floor(Math.random() * 6) + 1;
  // display dice

  diceEl.classList.remove('hidden'); //removing hidden class
  diceEl.src = `dice-${dice}.png`; // displaying the dice coresponding to the dice number
  //   current1.textContent = Number(current1.textContent) + dice;
  //   score1.textContent = dice;
  // If rolled 1 ==> next player
  if (dice !== 1) {
    // add the dice to the current score player 1
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; //change later
  } else {
    switchPlayer()
  }}})
  
  // Hold the score (if it's < 100 ==> switch player ) else the player wins
  
  holdBtn.addEventListener('click', function(){
    if(playing){
      scores[activePlayer] += currentScore;

    if(scores[activePlayer] < 100){
      console.log(scores[activePlayer])
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
      switchPlayer()
    }

      else{
        playing = false
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        console.log(`🏆Player ${activePlayer + 1} wins!!! 🏆`)
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        document.getElementById(`name--${activePlayer}`).textContent = `🏆 P${activePlayer +1} wins 🏆`
        diceEl.classList.add('hidden')
      }
  }
}
  )
  newGame.addEventListener('click', gameReset)
  


