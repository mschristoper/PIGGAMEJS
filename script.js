'use strict';

let Score1 = 0,
  Score2 = 0,
  currentScore = 0;
let player = 1;

let rollDiceImage = function (rollDice) {
  let img = document.querySelector('.dice');
  switch (rollDice) {
    case 1:
      img['src'] = 'dice-1.png';
      break;
    case 2:
      img['src'] = 'dice-2.png';
      break;
    case 3:
      img['src'] = 'dice-3.png';
      break;
    case 4:
      img['src'] = 'dice-4.png';
      break;
    case 5:
      img['src'] = 'dice-5.png';
      break;
    case 6:
      img['src'] = 'dice-6.png';
      break;
  }
};
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (player === 1) {
    let rollDice = Math.trunc(Math.random() * 6 + 1);
    rollDiceImage(rollDice);
    currentScore = currentScore + rollDice;
    document.querySelector('.current-score').textContent = currentScore;
    if (rollDice === 1) {
      currentScore = 0;
      document.querySelector('.current-score').textContent = currentScore;
      player = 2;
      alert('player2 turns');
    }
  } else if (player === 2) {
    let rollDice = Math.trunc(Math.random() * 6 + 1);
    rollDiceImage(rollDice);
    currentScore = currentScore + rollDice;
    document.querySelector('#current--1').textContent = currentScore;

    if (rollDice === 1) {
      currentScore = 0;
      document.querySelector('.current-score').textContent = currentScore;
      player = 1;
      alert('player1 turns');
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (player === 1) {
    Score1 = Score1 + currentScore;
    document.querySelector('.score').textContent = Score1;
    currentScore = 0;
    player = 2;
    if (Score1 >= 100) {
      alert('Player 1 wins the game');
    }
    alert('player2 turns');
  } else if (player === 2) {
    Score2 = Score2 + currentScore;
    document.querySelector('#score--1').textContent = Score2;
    currentScore = 0;
    player = 1;
    if (Score2 >= 100) {
      alert('Player 2 wins the game');
    }
    alert('player1 turns');
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  (Score1 = 0), (Score2 = 0), (currentScore = 0);
  player = 1;
  document.querySelector('.current-score').textContent = currentScore;
  document.querySelector('#current--1').textContent = currentScore;
  document.querySelector('.score').textContent = Score1;
  document.querySelector('#score--1').textContent = Score2;
});
