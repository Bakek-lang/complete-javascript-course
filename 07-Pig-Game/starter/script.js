'use strict';

const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

const player1 = document.querySelector('.player--0');
const player1Score = document.querySelector('#score--0');
const player1CurrentScore = document.querySelector('#current--0');

const player2 = document.querySelector('.player--1');
const player2Score = document.querySelector('#score--1');
const player2CurrentScore = document.querySelector('#current--1');

const newGameFunction = function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  rollDice.disabled = false;
  hold.disabled = false;
};

rollDice.addEventListener('click', function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${randomNumber}.png`;
  if (player1.classList.contains('player--active')) {
    if (randomNumber === 1) {
      player1CurrentScore.textContent = '0';
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else {
      randomNumber += Number(player1CurrentScore.textContent);
      player1CurrentScore.textContent = randomNumber;
    }
  } else if (player2.classList.contains('player--active')) {
    if (randomNumber === 1) {
      player2CurrentScore.textContent = '0';
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    } else {
      randomNumber += Number(player2CurrentScore.textContent);
      player2CurrentScore.textContent = randomNumber;
    }
  }
});

hold.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    let currentNumber =
      Number(player1Score.textContent) +
      Number(player1CurrentScore.textContent);
    player1Score.textContent = currentNumber;
    player1CurrentScore.textContent = 0;
    if (Number(player1Score.textContent) >= 100) {
      player1.classList.add('player--winner');
      rollDice.disabled = true;
      hold.disabled = true;
    }
  } else if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    let currentNumber =
      Number(player2Score.textContent) +
      Number(player2CurrentScore.textContent);
    player2Score.textContent = currentNumber;
    player2CurrentScore.textContent = 0;
    if (Number(player2Score.textContent) >= 100) {
      player2.classList.add('player--winner');
      rollDice.disabled = true;
      hold.disabled = true;
    }
  }
});

newGame.addEventListener('click', newGameFunction);
