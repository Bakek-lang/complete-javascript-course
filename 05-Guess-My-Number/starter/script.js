'use strict';

const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const againButton = document.querySelector('.again');
const body = document.querySelector('body');
const bigNumber = document.querySelector('.number');
let currentScore = 20;
let randomNumber = Math.floor(Math.random() * 21);
let highscoreNumber = 0;

checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔️ No number!';
  } else if (guess < 1) {
    message.textContent = '❌ Number input too low';
  } else if (guess > 20) {
    message.textContent = '🚫 Number input too high';
  } else {
    if (guess > randomNumber) {
      message.textContent = '📈 Too high!';
      currentScore -= 1;
      score.textContent = currentScore;
    } else if (guess < randomNumber) {
      message.textContent = '📉 Too low!';
      currentScore -= 1;
      score.textContent = currentScore;
    } else if (guess === randomNumber) {
      message.textContent = '🎉 Correct number!';
      body.style.backgroundColor = 'green';
      checkButton.style.display = 'none';
      bigNumber.textContent = guess;
      bigNumber.style.width = '30rem';
      if (currentScore !== 0 && currentScore > Number(highscore.textContent)) {
        highscore.textContent = currentScore;
      }
    }
  }
});

againButton.addEventListener('click', function () {
  currentScore = 20;
  guessInput.value = '';
  randomNumber = Math.floor(Math.random() * 21);
  message.textContent = 'Start guessing...';
  score.textContent = currentScore;
  bigNumber.textContent = '?';
  checkButton.style.display = 'block';
  body.style.backgroundColor = '#222';
  bigNumber.style.width = '15rem';
});
